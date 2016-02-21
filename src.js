function hello(a, b) { console.log('hello:', a, b); }
 
 var fn = throttle(hello, 1000); // returns the throttled hello() function that throttles for 1s
 
 fn(1, 2); // calls hello(1, 2);
 fn(1, 2); // does nothing
 
 setTimeout(fn, 500, 1, 2); // waits 500ms but does nothing
 setTimeout(fn, 1500, 1, 2); // waits 1500ms and then calls hello(1, 2);
 

function throttle(fn, delay) {

	var throttling = false;

	return function () {

		if (!throttling) {
			fn.apply(null, arguments);
			throttling = true;
			setTimeout(function () {
				throttling = false;
			}, delay);
		}

	};

}