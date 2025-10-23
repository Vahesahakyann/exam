import pgk from 'pg';
import ENVcon from 'dotenv'
ENVcon.config();
const {Pool}=pgk;
const pool=new Pool({
    user:process.env.DBUSER,
    database:process.env.DATABASE,
    port:5432,
    password:process.env.DBPASSWORD

})
export default pool;
