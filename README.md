# IFN — AI Advertising (React + Express + Mongo + Socket.io)

Full-stack demo for an AI-powered advertising website:

- Frontend: React (Vite) SPA with bilingual i18n (English + Arabic RTL)
- Backend: Node.js + Express
- Database: MongoDB (Mongoose) for inquiries/campaigns/users
- Real-time: Socket.io live progress updates (AI generation simulation)
- Animations: Framer Motion
- SEO: React Helmet

## Repo structure

- `frontend/` React SPA
- `backend/` Express API + Socket.io + Mongo models

## Local setup

### 1) Install dependencies

```powershell
cd C:\Users\Administrator\Desktop\ifn
npm install
```

### 2) Backend env

Copy and edit:

- `backend/.env.example` → `backend/.env`

Minimum:

```env
PORT=8080
CLIENT_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/ifn
```

### 3) Start MongoDB

If you already have MongoDB running locally, you can skip this.

### 4) Run dev servers

Backend (port 8080) and frontend (port 5173):

```powershell
cd C:\Users\Administrator\Desktop\ifn
npm run dev:win
```

Or run them separately:

```powershell
npm run dev --workspace backend
npm run dev --workspace frontend
```

Frontend will be at:

- `http://localhost:5173`

Backend health check:

- `http://localhost:8080/api/health`

## Features to try

- Language switcher (EN/AR) in navbar/footer (RTL/LTR toggles automatically)
- Services flip-cards + FAQ accordion
- Contact form → saves inquiry in MongoDB (`POST /api/inquiries`)
- AI Dashboard → click “Generate ad” and watch live progress via Socket.io (`/api/ai/generate-ad`)

## GitHub Pages

This repo is configured to deploy the **frontend only** to GitHub Pages via GitHub Actions.

- The workflow builds `frontend/` and deploys `frontend/dist`.
- Because GitHub Pages can’t run Node/Express, the backend must be deployed separately.

Your site (repo = `ifn`) will be:

- `https://luckasgh9170.github.io/ifn/`

## Deploy (recommended)

### Frontend

- Netlify / Vercel
  - Build: `npm run build --workspace frontend`
  - Output: `frontend/dist`
  - Env: `VITE_API_BASE_URL=https://<your-backend-domain>`

### Backend

You can deploy the backend to Render / Railway / Heroku-like platforms:

- Start command: `npm run start --workspace backend`
- Env vars:
  - `PORT`
  - `CLIENT_ORIGIN` (your frontend URL)
  - `MONGODB_URI`
  - `OPENAI_API_KEY` (optional placeholder)

## API quick reference

- `GET /api/health`
- `POST /api/inquiries`
- `GET /api/inquiries`
- `POST /api/ai/generate-ad` (emits `ai:progress` + `ai:result` over Socket.io)
- `GET /api/campaigns`
- `POST /api/campaigns`
- `PATCH /api/campaigns/:id/status`

