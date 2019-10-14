import express from 'express'
import { check, validationResult } from 'express-validator'
import axios from 'axios'
import cors from 'cors'

const Registration = express()

Registration.use(cors())

Registration.use(express.json())

const registrationRules = [
  check('password').isLength({ min: 8, max: 50 }),
  check('password_confirmation').isLength({ min: 8, max: 50 }),
  check('email').isEmail().isLength({ max: 50 }),
  check('name').isLength({ min: 3, max: 25 })
]

Registration.post('/', registrationRules, (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const payload = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    password_confirmation: req.body.password_confirmation
  }

  // Send code to api
  axios.defaults.headers.common.Authorization = 'Bearer aeg8mGewwdhVJEjmqV59PYfeGRFhq8bPVo3WXWFC'
  axios.defaults.headers.common.Accept = 'application/json'
  axios.defaults.headers.post['Content-Type'] = 'application/json'

  axios.post(process.env.AUTH_SERVER + '/v1/register', payload)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      res.status(422).json(error.response.data)
    })
})

export {
  Registration
}
