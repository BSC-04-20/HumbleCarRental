/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tarawera': {
          '50': '#edfdfe',
          '100': '#d1f8fc',
          '200': '#a8f0f9',
          '300': '#6ce2f4',
          '400': '#29cbe7',
          '500': '#0daecd',
          '600': '#0e8bac',
          '700': '#12708c',
          '800': '#185b72',
          '900': '#194c60',
          '950': '#0c3b4f',
      },
      'roti': {
          '50': '#f9f9ed',
          '100': '#f0efd1',
          '200': '#e3dea5',
          '300': '#d2c772',
          '400': '#c4b14b',
          '500': '#bea540',
          '600': '#9c7f32',
          '700': '#7d5f2b',
          '800': '#694e2a',
          '900': '#5b4228',
          '950': '#342314',
      },


      }
    },
  },
  plugins: [],
}