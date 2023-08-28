const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'addcontact' : './javascript/addcontact.js',
	'contact' : './javascript/contact.js',
	'Page4' : './javascript/Page4.js',
	'Page5' : './javascript/Page5.js',
	'Page6' : './javascript/Page6.js',
	'Page7' : './javascript/Page7.js',
	'Page8' : './javascript/Page8.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};