import pkg from 'pg';
import dotenv from 'dotenv';


const { Pool } = pkg;

dotenv.config();

const pool=new Pool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
});

export const connectDB=async(err,client,release)=>{
if(err){
    console.log('Error connection Postgres',err.message);
}else{
    console.log('Postgres connected successfully');
    release();
}
};

export default pool;