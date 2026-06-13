import express from 'express'
import MonstersController from '../controllers/monsters.js'

const router = express.Router()

router.get('/', MonstersController.getMonsters)

router.get('/:monsterId', MonstersController.getMonsterById)

export default router