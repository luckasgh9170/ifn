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
4) `Build and deployment` را روی `Deploy from a branch` بگذارید.
5) `Branch` را `main` و مسیر را `/ (root)` انتخاب کنید.

بعد از چند دقیقه آدرس سایت شما این می‌شود:

- `https://<USERNAME>.github.io/<REPO>/`

