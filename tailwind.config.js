/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    // responsive mode format

    // max-width format

    screens: {
      fullhd: { max: '1920px' }, // (max-width: 1920px)
      laptop: { max: '1280px' }, // (max-width: 1280px)
      tablet: { max: '1023px' }, // (max-width: 1023px)
      mobile: { max: '720px' }, // (max-width: 720px)
    },

    // max-width format

    screens: {
      tabletMinWidth: '640px', // (min-width: 640px)
      laptopMinWidth: '1024px', // (min-width: 1024px)
      desktopMinWidth: '1280px', // (min-width: 1280px)
      fullHdMinWidth: '1440px', // (min-width: 1440px)
    },

    extend: {
      colors: {
        mainColors: 'var(--mainColor)',
      },

      // font family
      // syntax example: font-NelaSlabLight or font-NewEleganceSansCondensed

      fontFamily: {
        NelaSlabLight: ['NelaSlabLight'],
        DrukWideMedium: ['DrukWideMedium'],
        DrukWideBold: ['DrukWideBold'],
      },

      // syntax example: text-smallLogo or text-mediumLogo

      fontSize: {
        logoNavbar: '1.5rem',

        mainTitleMobile: '4rem',
        mainTitleClosingPC: '5rem',
        subMenuTitle: '2rem',
        paragraphTitle: '0.7rem',
      },
    },
  },
  plugins: [],
};
