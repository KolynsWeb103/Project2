import { pool } from './database.js'
import dotenv from 'dotenv'
import monsterData from '../data/monsters.js'

dotenv.config({ path: '../.env' })

const createMonstersTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS monsters;

        CREATE TABLE IF NOT EXISTS monsters (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            type TEXT NOT NULL,
            description TEXT NOT NULL,
            image TEXT NOT NULL,
            statusWeakness TEXT[],
            elementWeakness TEXT[],
            weaponWeakness TEXT[]
        );
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('⚔️ monsters table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating monsters table', err)
    }
}

const seedMonstersTable = async () => {
    try {
        await createMonstersTable()

        for (const monster of monsterData)
        {
            const insertQuery = {
                text: `
                    INSERT INTO monsters (
                        name,
                        type,
                        description,
                        image,
                        statusWeakness,
                        elementWeakness,
                        weaponWeakness
                    )
                    VALUES ($1, $2, $3, $4, $5, $6, $7);
                `,
                values: [
                    monster.name,
                    monster.type,
                    monster.description,
                    monster.image,
                    monster.statusWeakness,
                    monster.elementWeakness,
                    monster.weaponWeakness
                ]
            }
                await pool.query(insertQuery)
                console.log(`✅ ${monster.name} added successfully`)
        }
    } catch (err) {
        console.error('⚠️ error seeding monsters table', err)
    } finally {
        await pool.end()
    }
}

seedMonstersTable()
