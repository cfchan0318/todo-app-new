const getPool = (req) => { return req.app.locals.db; }

const runQuery = (req, query) => {
    return new Promise((resolve, reject) => {
        req.app.locals.db.request().query(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}


module.exports = { getPool, runQuery }