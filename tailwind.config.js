/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        default: '0px 6px 18px 0px rgba(0, 0, 0, 0.06)',
        select:
          '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        'select-active':
          '0px 0px 0px 4px rgba(8, 27, 78, 0.08), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        divider: '#EBEFF2',

        'blue-200': '#747D94',
        'blue-500': '#293D71',
        'blue-600': '#213770',
        'blue-800': '#00113D',

        'orange-400': '#F43724',
        'orange-500': '#F21A05',

        'gray-50': '#F9FAFB',
        'gray-100': '#EAECF0',
        'gray-200': '#C3C3C3',
        'gray-300': '#D0D5DD',
        'gray-400': '#667085',
        'gray-500': '#777777',
        'gray-600': '#717171',
        'gray-900': '#101828',
        'gray-background': '#F5F6F8',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
