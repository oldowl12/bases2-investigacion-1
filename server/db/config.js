const arangojs = require('arangojs');

const host = process.env.ARANGO_HOST;
const port = process.env.ARANGO_PORT;
const database = process.env.ARANGO_DATABASE;
const username = process.env.ARANGO_USERNAME;
const password = process.env.ARANGO_PASSWORD;

const db = new arangojs.Database({
    url: `http://${host}:${port}`,
    databaseName: database
});
db.useBasicAuth(username, password);

module.exports = db;
