//const { Client } = require('pg'); // can be installed by "npm install pg" command from terminal
// const client = new Client(); // establish new client object

const Pool = require('pg').Pool;

const pool = new Pool({
    user:'meli',
    host:'localhost',
    database:'standings',
    password:'password',
    port:5433,
});
// const client = new Client({
//     host: '127.0.0.1',
//     user: 'meli',
//     database: 'standings',
//     password: 'password',
//     port: 5433,
// });

// const updateHTMLTable = async () => {
//     const query
// };

await client.connect(); // connect to the postgresql

const res = await client.query()
// process



await client.end();
