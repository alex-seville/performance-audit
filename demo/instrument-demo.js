var fs = require('fs'),
	instrument = require('../instrument');

var src = fs.readFileSync('./src.js', 'utf8');

var output = instrument(src, 'src.js');

fs.writeFileSync('./output.js', output, 'utf8');

