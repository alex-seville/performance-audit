var falafel = require('falafel'),
	fs = require('fs');

function track (filename, line) {

	if (!global.log)
		global.log = [];

	global.log.push({
		time: new Date().getTime(),
		file: filename,
		line: line
	});

}

function finalize () {
	var lasttime = global.log[0].time;
	global.log.forEach(function(entry) {
		console.log(entry.time, entry.file, 'line:', entry.line, ' duration:', entry.time - lasttime);
		lasttime = entry.time;
	});
}


var src = fs.readFileSync('./src.js', 'utf8');

var output = falafel(src, { locations: true }, function (node) {
	// console.log('Entered node', node, node.source());
	
    if (node.type === 'ExpressionStatement') {
        node.update( node.source() + '\ntrack("hello", ' + node.loc.end.line + '); \n');
    }
    
});

output = track.toString() + '\n' + output + '\n' + finalize.toString() + '\nsetTimeout(finalize, 2000);';


fs.writeFileSync('./output.js', output, 'utf8');

