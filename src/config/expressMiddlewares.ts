import * as cors from 'cors'
import * as morgan from 'morgan'
import * as helmet from 'helmet'
import * as bodyParser from 'body-parser'

const expressMiddlewares = [
  helmet(),
  cors(),
  bodyParser.json({ limit: '10mb' }),
  bodyParser.urlencoded({ limit: '10mb', extended: true }),
  bodyParser.raw({ inflate: true, limit: '10mb', type: 'application/json' }),
  morgan('combined')
]

export default expressMiddlewares
