/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.pug', './views/**/*.pug'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require('@repo/tailwind-config')],
};

// https://stackoverflow.com/questions/71082709/how-to-use-tailwindcss-with-nestjs
