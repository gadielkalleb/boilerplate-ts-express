import { config } from 'dotenv'

config()

import * as http from 'http'

import { port } from './environments'

import app from './app'

http
  .createServer(app)
  .listen(port)
