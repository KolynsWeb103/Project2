import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config({ path: '../.env' })

console.log('PGHOST:', process.env.PGHOST)
console.log('PGDATABASE:', process.env.PGDATABASE)

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)
