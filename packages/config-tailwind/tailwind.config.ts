import type { Config } from 'tailwindcss';
import * as tailwindAnimate from 'tailwindcss-animate';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  darkMode: ['media', 'class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'glow-conic':
          'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
    },
  },
  plugins: [tailwindAnimate],
};
export default config;
