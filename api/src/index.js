const express = require('express');
const dotenv = require('dotenv');
const sql = require('mssql');

const app = express();

//Configurations
const port = process.env.PORT || 5000
dotenv.config()
app.use(express.json())

//Database
const dbConfig = require('./constants/dbConfig')
const dbPool = new sql.ConnectionPool(dbConfig)

//Routes
const router = require('./routes/index')
app.use('/api/v1', router);


dbPool.connect().then((pool) => {
    app.locals.db = pool;
    if (app.locals.db) {
        console.log('Database pool created')
    }
    const server = app.listen(port, function (err) {
        if (err) console.error(err);
        const host = server.address().address
        const port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)
    });
}).catch(function (err) {
    console.error('Error creating connection pool', err)
})
