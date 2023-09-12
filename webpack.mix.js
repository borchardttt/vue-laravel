const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
/*
require('babel-polyfill');

 mix.webpackConfig({
 	target: ['web', 'es5'],
 	resolve: {
 		modules: ['node_modules'],
 	},
 });
*/
 mix.js("resources/js/app.js", "public/js")
 .postCss('resources/css/app.css', 'public/css')
 .vue();
 //.babel(['public/js/app.js'], 'public/js/app.es5.js').vue()
 //.version();

//mix.js('resources/js/app.js', 'public/js')
  //  .vue();

