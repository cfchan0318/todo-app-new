const getPool = (req) => { return req.app.locals.db; }

const runQuery = async (req, query) => {
    try {
        let db = req.app.locals.db;
        let result = await db.query(query);
        return result;
    } catch (error) {
        console.error(error)
        return;
    }
}

module.exports = {getPool, runQuery }