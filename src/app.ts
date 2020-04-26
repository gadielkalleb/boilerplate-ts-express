import * as express from 'express'

import 'express-async-errors'

import { mongoConnect, expressMiddlewares } from './config'
import { sendExpressError } from './utils'
import api from './api'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
    this.appError()
  }

  private middlewares() {
    this.express.use(expressMiddlewares)
  }

  private database() {
    mongoConnect.start()
  }

  private routes() {
    this.express.get('/favicon.ico', (req, res, next) => (res.status(204)))
    this.express.get('/', (req, res, next) => (res.status(200).send('hello word')))
    this.express.use('/api', api)
  }

  private appError() {
    this.express.use((err, req, res, next) => {
      console.log('err', err)
    
      sendExpressError(err, res)

      if (!err.statusCode) {
        process.exit(1)
      }
    })
  }

}

export default new App().express