import monsters from '../data/monsters.js'

function createSlug(name) {
  return name
    .toLowerCase()
    .replaceAll('.', '')
    .replaceAll("'", '')
    .replaceAll(' ', '-')
}

const monstersWithIds = monsters.map((monster) => {
  return {
    id: createSlug(monster.name),
    ...monster
  }
})

const MonstersController = {
  getMonsters(req, res) {
    res.status(200).json(monstersWithIds)
  },

  getMonsterById(req, res) {
    const monster = monstersWithIds.find(
      (monster) => monster.id === req.params.monsterId
    )

    if (!monster) {
      return res.status(404).json({ message: 'Monster not found' })
    }

    res.status(200).json(monster)
  }
}

export default MonstersController
