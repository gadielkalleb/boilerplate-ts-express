import * as express from 'express'
import { Response } from 'express'

import 'express-async-errors'

import { mongoConnect, expressMiddlewares } from './config'
import { SendExpressError, ErrorHandler } from './utils'
import api from './api'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares() {
    this.express.use(expressMiddlewares)
  }

  private database() {
    mongoConnect.start()
  }

  private routes() {
    this.express.use('/api', api)
    this.express.use((err: ErrorHandler, req, res: Response, next) => {
      SendExpressError.sendError(err, res)
      if (!err.statusCode) {
        process.exit(1)
      }
    })
  }

}

export default new App().express
