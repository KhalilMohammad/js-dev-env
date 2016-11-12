//The file isn't transpilled , so must use CommonJs and ES5

//Register Babel to transpile before our unit test run
require('babel-register')();

//Disable webpack features that mocha does not understand
require.extension['.css'] = function() {};
