/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          sky: '#38BDF8',
          ink: '#07111F'
        }
      },
      boxShadow: {
        glow: '0 28px 90px rgba(37, 99, 235, 0.18)',
        card: '0 18px 70px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'PingFang SC', 'Microsoft YaHei', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(37,99,235,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,.08) 1px,transparent 1px)'
      }
    }
  },
  plugins: []
}
