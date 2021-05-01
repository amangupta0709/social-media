import express from 'express'
import morgan from 'morgan'

const PORT = process.env.PORT || 5000
const app = express()

//logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// middlewares
app.use(express.json())

app.listen(PORT, console.log(`Server started on ${PORT}`))
