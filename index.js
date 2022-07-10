const sql = require('mysql')

function connectSql(user, password, database){
    sql.createConnection({
        user: user,
        password: password,
        database: database
    })
    console.log(`[+] Connected to user: ${user} with password: ${password} and database: ${database}. To delete this message try: any.connectSqlWhitoutMsg(any, any, any)`)
}
function connectSqlWhitoutMsg(user, password, database){
    sql.createConnection({
        user: user,
        password: password,
        database: database
    })
}
export default { connectSql, connectSqlWhitoutMsg }