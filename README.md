# ifn

یک وبسایت استاتیک ساده (HTML/CSS/JS) آماده‌ی توسعه و انتشار روی GitHub Pages.

## اجرا روی سیستم

- فایل `index.html` را با مرورگر باز کنید.

## انتشار روی GitHub Pages (Project site)

1) یک ریپو در GitHub بسازید (مثلاً `ifn`).
2) در همین فولدر دستورهای زیر را اجرا کنید:

```powershell
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

3) در GitHub بروید به: `Settings` → `Pages`
4) در بخش `Build and deployment` مقدار `Source` را روی `GitHub Actions` بگذارید.
5) بعد از Push، در تب `Actions` وضعیت Deploy را می‌بینید و سایت آنلاین می‌شود.

بعد از چند دقیقه آدرس سایت شما این می‌شود:

- `https://<USERNAME>.github.io/<REPO>/`

نکته: اگر دوست دارید به جای Workflow از حالت `Deploy from a branch` استفاده کنید، می‌توانید فایل `.github/workflows/pages.yml` را حذف کنید.
