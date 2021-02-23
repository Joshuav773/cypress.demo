import { ConnectionPool } from 'mssql';

const pool = new ConnectionPool("mssql://AutomationTester:Bankers20@bhg-dc1-sqldev1/Placements?encrypt=true");

function getConnection(pool: ConnectionPool): Promise<ConnectionPool> {
    return pool.connect();
}

function closeConnection(pool: ConnectionPool): void {
    pool.close((err) => {
        console.log(`connection is still open. Error =>\n${ err }`)
    });
}

async function rawQuery(query: string) {
    await getConnection(pool);

    const request = pool.request();
    const result = await request.query(query);
    closeConnection(pool);

    return result.recordset;
}

async function rawExecute(procName: string) {
    await getConnection(pool);

    const request = pool.request();
    const result = await request.query(procName);
    closeConnection(pool);

    return result.recordset;
}

//Exports
const _rawQuery = rawQuery;
const _rawExecute = rawExecute;

export { 
    _rawQuery,
    _rawExecute  
};

