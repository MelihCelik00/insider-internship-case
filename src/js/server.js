const { Client } = require('pg'); // can be installed by "npm install pg" command from terminal
// const client = new Client(); // establish new client object

const client = new Client({
    host: '127.0.0.1',
    user: 'meli',
    database: 'standings',
    password: 'password',
    port: 5433,
});


await client.connect(); // connect to the postgresql

const res = await client.query()
// process



await client.end();
