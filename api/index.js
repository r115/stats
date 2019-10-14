import express from 'express'
import { app as Routes } from './routes/index.js'

const app = express()

app.use(express.json())

app.use('/', Routes)

export default {
  path: '/api',
  handler: app
}
