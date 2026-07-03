/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', '"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#0B0E17',
        surface: '#11152199',
        accent: {
          blue: '#4D6BFE',
          purple: '#9D5CFF',
          cyan: '#3FE0D0',
        },
      },
      backgroundImage: {
        'aurora': 'radial-gradient(circle at 20% 20%, rgba(77,107,254,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(157,92,255,0.3), transparent 45%), radial-gradient(circle at 50% 100%, rgba(63,224,208,0.25), transparent 45%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(77,107,254,0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
