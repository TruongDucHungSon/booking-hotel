import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#343434',
        'white-a6': 'FFFFFFA6',
        gradient: 'linear-gradient(108deg, #3A449B -22.88%, #EF5F5F 108.34%)',
      },

      fontFamily: {
        wylie: ['Wylie Voigen', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
      },
      backdropBlur: {
        '6': '6px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(108deg, #3A449B -22.88%, #EF5F5F 108.34%)',
      },
    },
  },
  plugins: [],
};
export default config;
