$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

function Get-GitForWindowsUrl {
  $rel = Invoke-RestMethod -Uri 'https://api.github.com/repos/git-for-windows/git/releases/latest' -Headers @{ 'User-Agent' = 'ifn-setup' }
  $asset = $rel.assets | Where-Object { $_.name -match '^Git-.*-64-bit\.exe$' } | Select-Object -First 1
  if (-not $asset) { throw 'Could not find Git for Windows 64-bit installer in latest release assets.' }
  $asset.browser_download_url
}

function Get-GitHubCliMsiUrl {
  $rel = Invoke-RestMethod -Uri 'https://api.github.com/repos/cli/cli/releases/latest' -Headers @{ 'User-Agent' = 'ifn-setup' }
  $asset = $rel.assets | Where-Object { $_.name -match '^gh_.*_windows_amd64\.msi$' } | Select-Object -First 1
  if (-not $asset) { throw 'Could not find GitHub CLI windows amd64 MSI in latest release assets.' }
  $asset.browser_download_url
}

function Get-LatestNodeLtsMsiUrl {
  $index = Invoke-RestMethod -Uri 'https://nodejs.org/dist/index.json' -Headers @{ 'User-Agent' = 'ifn-setup' }
  $entry = $index | Where-Object { $_.lts -and ($_.files -contains 'win-x64-msi') } | Select-Object -First 1
  if (-not $entry) { throw 'Could not find a Node.js LTS MSI in index.json.' }
  $v = $entry.version
  "https://nodejs.org/dist/$v/node-$v-x64.msi"
}

$dlDir = Join-Path $env:TEMP 'ifn-prereqs'
New-Item -ItemType Directory -Force -Path $dlDir | Out-Null

$gitUrl = Get-GitForWindowsUrl
$nodeUrl = Get-LatestNodeLtsMsiUrl
$ghUrl = Get-GitHubCliMsiUrl

$gitInstaller = Join-Path $dlDir (Split-Path $gitUrl -Leaf)
$nodeInstaller = Join-Path $dlDir (Split-Path $nodeUrl -Leaf)
$ghInstaller = Join-Path $dlDir (Split-Path $ghUrl -Leaf)

Write-Host "Downloading Git: $gitUrl"
Invoke-WebRequest -Uri $gitUrl -OutFile $gitInstaller

Write-Host "Downloading Node: $nodeUrl"
Invoke-WebRequest -Uri $nodeUrl -OutFile $nodeInstaller

Write-Host "Downloading GitHub CLI: $ghUrl"
Invoke-WebRequest -Uri $ghUrl -OutFile $ghInstaller

Write-Host 'Installing Git (silent)...'
Start-Process -FilePath $gitInstaller -ArgumentList '/VERYSILENT', '/NORESTART', '/SUPPRESSMSGBOXES', '/SP-' -Wait

Write-Host 'Installing Node (silent)...'
Start-Process -FilePath 'msiexec.exe' -ArgumentList '/i', $nodeInstaller, '/qn', '/norestart' -Wait

Write-Host 'Installing GitHub CLI (silent)...'
Start-Process -FilePath 'msiexec.exe' -ArgumentList '/i', $ghInstaller, '/qn', '/norestart' -Wait

# Refresh PATH for current session
$machinePath = [Environment]::GetEnvironmentVariable('Path', 'Machine')
$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')
$env:Path = @($machinePath, $userPath) -join ';'

Write-Host 'Versions after install:'
git --version
node --version
npm --version
gh --version
