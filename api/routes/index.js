import express from 'express'
import { Registration } from './auth/registration'

const app = express()

app.use('/v1/register', Registration)

export {
  app
}
