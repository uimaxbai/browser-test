/* const postcssPresetEnv = require('postcss-preset-env');
// const autoprefixer = require('autoprefixer');
// const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: {
    postcssPresetEnv,
    purgecss
  },
} */

const postcssPresetEnv = require('postcss-preset-env');
// const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
	plugins: [
		/* other plugins */
		/* remove autoprefixer if you had it here, it's part of postcss-preset-env */
		postcssPresetEnv({})
	]
}