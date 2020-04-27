import { Response } from 'express'
import ErrorHandler from './ErrorHandler'

export class ExpressError {

  sendError(error: ErrorHandler, res: Response): Response {
    const { statusCode, message } = error
    return res.status(statusCode ?? 500).json({
      status: 'error',
      statusCode,
      message
    })
  }

}

export default new ExpressError()
