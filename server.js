const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
	console.log(`Server running at: http://localhost:${app.get('port')}`);
})