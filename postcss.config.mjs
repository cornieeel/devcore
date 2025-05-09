const config = {
  plugins: ["@tailwindcss/postcss"],
};
module.exports = {
  theme: {
    extend: {
      colors: {
        darkTop: '#0c3a48',
        darkBottom: '#1f5c6d'
      },
      backgroundImage:{
        'teal-gradient': 'linear-gradient(to bottom, #0c3a48, #1f5c6d',
      },
    },
  },
}

export default config;
