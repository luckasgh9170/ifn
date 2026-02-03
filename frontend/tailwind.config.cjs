/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        slowSpin: 'slowSpin 28s linear infinite'
      },
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
