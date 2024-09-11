/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      "*.scss": "postcss" 
    },
  },
};

export default config;
