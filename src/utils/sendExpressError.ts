import { Response } from 'express'

export default function sendExpressError (
  { statusCode, message }: { statusCode?: number; message: string },
  res: Response
) {
  statusCode = !statusCode ? 500 : statusCode
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  })
}
