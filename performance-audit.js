(function() {
	performanceAudit = {
		_log : [],
		
		track: function (filename, line) {

			performanceAudit._log.push({
				time: new Date().getTime(),
				file: filename,
				line: line
			});

		},

		show: function () {
			var log = performanceAudit._log;

			console.log("********\nPerformance Audit\n********");
			if (log.length === 0) {
				console.log("No log entries");
			}
			var lasttime = log[0].time;
			log.forEach(function(entry) {
				console.log(entry.time, entry.file, 'line:', entry.line, ' duration:', entry.time - lasttime);
				lasttime = entry.time;
			});
			console.log("********\nEnd of Performance Audit\n********");
		},

		reset: function () {
			performanceAudit._log = [];
		}

	};

	window.performanceAudit = performanceAudit;
  	
})();
