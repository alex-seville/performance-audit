# performance-audit

Instrument and track JS execution.


## Step 1

Run the instrumentation on client side code.

```
instrument = require('performance-audit');

var src = fs.readFileSync('testfile.js', 'utf8');

var output = instrument(src);
```

## Step 2

Reference the client script, `performance-audit.js` in the DOM

```
<script src="./performance-audit.js"></script>
```

## Step 3

Run your code

## Step 4

At any point print the log to the console to see a JS execution log.

```
window.performanceAudit.finalize();
```


## Run the demo

1. cd `demo`
2. Run `node instrument-demo.js`
3. Open demo.html in a web browser
4. After 1600 ms, run `window.performanceAudit.finalize();` in the console