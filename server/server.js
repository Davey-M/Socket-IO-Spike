const express = require('express');
const app = express();

const port = 5000 || process.env.PORT;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log('App running on port:', port));