let enviroment = {
  plugins: [
    require('tailwindcss')('./app/javascript/stylesheet/tailwind.config.js'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
};

module.exports = enviroment
