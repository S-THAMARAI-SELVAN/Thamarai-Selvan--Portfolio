/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GitHub Dark Theme Palette (Default)
        github: {
          bg: '#0D1117',
          card: '#161B22',
          border: '#30363D',
          accent: '#58A6FF',
          text: '#E6EDF3',
          secondary: '#8B949E',
          success: '#3FB950',
        },
        // GitHub Light Theme Palette (Optional toggle)
        githubLight: {
          bg: '#F6F8FA',
          card: '#FFFFFF',
          border: '#D0D7DE',
          accent: '#0969DA',
          text: '#24292F',
          secondary: '#57606A',
          success: '#1A7F37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'github-sm': '0 1px 0 rgba(27, 31, 36, 0.04)',
        'github-md': '0 3px 6px rgba(140, 149, 159, 0.15)',
        'github-dark-sm': '0 1px 0 rgba(1, 4, 9, 0.8)',
        'github-dark-md': '0 8px 24px rgba(1, 4, 9, 0.2)',
      }
    },
  },
  plugins: [],
}
