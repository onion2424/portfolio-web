const PurgeCSS = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    PurgeCSS({
      content: ['./**/*.html'],
        whitelist:[
          '.skill-bar',
          'data-proficiency',
        ],
    })
  ]
}