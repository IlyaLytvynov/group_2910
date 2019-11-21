const express = require('express');
const FgBlue = '\x1b[34m';
const app = express();
app.use(express.static('./docs'));

app.listen(8080, function() {
  console.log(`${FgBlue}`, 'Example app listening on port 8080');
});
