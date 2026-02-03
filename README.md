# IFN — AI Customer Acquisition Landing (React + Tailwind)

Responsive, production-ready landing page for an AI customer acquisition chatbot, using content extracted from ifncompany.ir and translated to EN/AR.

- Frontend: React (Vite) + Tailwind CSS + Framer Motion animations + React Helmet SEO
- Bilingual content: English + Arabic (RTL/LTR toggle)
- Backend (optional): Node.js + Express + MongoDB to capture demo requests (`/api/inquiries`)

## Repo structure

- `frontend/` React landing page
- `backend/` Express API + Mongo models (optional)

## Local setup

### 1) Install dependencies

```powershell
cd C:\Users\Administrator\Desktop\ifn
npm install
```

### 2) Run frontend

```powershell
cd C:\Users\Administrator\Desktop\ifn
npm run dev --workspace frontend
```

Open:

- `http://localhost:5173`

### 3) (Optional) Run backend for form submissions

The landing page can submit demo requests to `POST /api/inquiries`.

Copy and edit:

- `backend/.env.example` → `backend/.env`

Minimum:

```env
PORT=8080
CLIENT_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/ifn
```

Start MongoDB (if not already running), then:

```powershell
cd C:\Users\Administrator\Desktop\ifn
npm run dev --workspace backend
```

Backend health check:

- `http://localhost:8080/api/health`

## GitHub Pages

This repo is configured to deploy the **frontend only** to GitHub Pages via GitHub Actions.

- The workflow builds `frontend/` and deploys `frontend/dist`.
- Because GitHub Pages can’t run Node/Express, deploy the backend separately if you want the demo form to save into MongoDB.

Your site (repo = `ifn`) will be:

- `https://luckasgh9170.github.io/ifn/`

## Deploy backend (optional)

Deploy the backend to Render / Railway / similar platforms:

- Start command: `npm run start --workspace backend`
- Env vars:
  - `PORT`
  - `CLIENT_ORIGIN` (your frontend URL)
  - `MONGODB_URI`

Then set `frontend/.env`:

```env
VITE_API_BASE_URL=https://<your-backend-domain>
```

