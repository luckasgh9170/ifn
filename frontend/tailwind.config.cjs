/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050508',
          900: '#0a0a10',
          800: '#10101b'
        },
        purpleGlow: {
          400: '#A78BFA',
          300: '#C4B5FD'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(167, 139, 250, 0.18), 0 20px 60px rgba(0,0,0,0.55)',
        soft: '0 18px 50px rgba(0,0,0,0.45)'
      }
    }
  },
  plugins: []
};

