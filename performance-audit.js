(function() {
	performanceAudit = {
		log : [],
		
		track: function (filename, line) {

			this.log.push({
				time: new Date().getTime(),
				file: filename,
				line: line
			});

		},

		finalize: function () {
			var lasttime = this.log[0].time;
			this.log.forEach(function(entry) {
				console.log(entry.time, entry.file, 'line:', entry.line, ' duration:', entry.time - lasttime);
				lasttime = entry.time;
			});
		}

	};

	window.performanceAudit = performanceAudit;
  	
})();

