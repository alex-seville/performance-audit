var falafel = require('falafel');

module.exports = function (src, filename) {
	return falafel(src, { locations: true }, function (node) {
		if (node.type === 'ExpressionStatement') {
		    node.update( node.source() + '\nperformanceAudit.track("' + filename + '", ' + node.loc.end.line + '); \n');
		}
	});
};

