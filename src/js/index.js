const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'nodejs, express and postgres api' });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

