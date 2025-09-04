/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: '#AC6AFF',
          2: '#FFC876',
          3: '#FFFFFF',
          4: '#7ADB78',
          5: '#858DFF',
          6: '#FF98E2',
        },
        stroke: {
          1: '#26242C',
        },
        n: {
          1: '#F5F5F5',
          2: '#FBFBFB',
          3: '#ADA8C3',
          4: '#757185',
          5: '#3F3A52',
          6: '#252134',
          7: '#15131D',
          8: '#000000',
          9: '#474060',
          10: '#43435C',
          11: '#1B1B2E',
          12: '#2E2A41',
          13: '#6C7275',
        },
      },
      fontFamily: {
        pp: ['PP Neue Montreal', ...fontFamily.sans],
        work: ['Work Sans', ...fontFamily.sans],
      },
      letterSpacing: {
        tagline: '.15em',
      },
      spacing: {
        0.25: '0.0625rem',
        7.5: '1.875rem',
        15: '3.75rem',
      },
      opacity: {
        15: '.15',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'linear',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      borderWidth: {
        DEFAULT: '0.0625rem',
      },
    },
    screens: {
      xxs: '420px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '2560px',
      'sm-tall': { raw: '(min-width: 800px) and (min-height: 1150px)' },
      'md-tall': { raw: '(min-width: 900px) and (min-height: 1150px)' },
      'lg-tall': { raw: '(min-width: 1024px) and (min-height: 1150px)' },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        '.container': {
          '@apply max-w-[1280px] mx-auto px-5 md:px-10 lg:px-10': {},
        },
        '.h1': {
          '@apply font-semibold text-[2rem] leading-[2rem] sm:text-[2.5rem] sm:leading-[2.5rem] md:text-[3rem] md:leading-[3rem] xl:text-[4rem] xl:leading-[4rem]':
            {},
        },
        '.h2': {
          '@apply text-[1.5rem] leading-[1.5rem] sm:text-[1.75rem] sm:leading-[1.75rem] lg:text-[2rem] lg:leading-[2rem]':
            {},
        },
        '.h3': {
          '@apply text-[18px] leading-[18px] md:text-[1.25rem] md:leading-[1.25rem] lg:text-[1.5rem] lg:leading-[1.5rem]':
            {},
        },
      });
      addUtilities({
        '.tap-highlight-color': {
          '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        },
        '.button-gradient': {
          background: 'linear-gradient(93deg, #027dec, #15e29f)',
          'background-size': '200% 200%',
          'background-position': 'left center',
          transition: 'background-position 0.4s ease-in-out',
        },
      });
    }),
  ],
});
