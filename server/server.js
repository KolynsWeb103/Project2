import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import monstersRouter from './routes/monsters.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Serve client folder
app.use(express.static(path.resolve(__dirname, '../client')))

// Serve Pico CSS
app.use(
  '/pico',
  express.static(path.resolve(__dirname, 'node_modules/@picocss/pico/css'))
)

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

// Use monsters router
app.use('/api/monsters', monstersRouter)

// Detail page route
app.get('/monsters/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/detail.html'))
})

// 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../client/public/404.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})