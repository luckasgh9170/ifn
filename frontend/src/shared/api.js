import axios from 'axios';

// In production (e.g. GitHub Pages), you usually deploy the backend separately and set VITE_API_BASE_URL.
// If not set, we fall back to same-origin (relative requests).
const runtimeBase = typeof window !== 'undefined' ? window.localStorage.getItem('ifn.apiBase') : '';
const baseURL = runtimeBase || import.meta.env.VITE_API_BASE_URL || '';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
