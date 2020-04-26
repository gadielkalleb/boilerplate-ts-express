import * as mongoose from 'mongoose'
import { mongodbUrl } from '../environments'

(mongoose as any).Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

class MongooseStart {
  start () {
    mongoose.connect(mongodbUrl, options)
    mongoose.connection.on('connected', async function () {
      console.log('Mongoose default connection connected to ' + process.env.NODE_ENV)
    })
    mongoose.connection.on('error', function (err) {
      console.log('Mongoose default connection err ' + err)
      process.exit(1)
    })
    mongoose.connection.on('disconnected', function () {
      console.log('Mongoose default connectios disconnected')
    })
    mongoose.connection.on('open', function () {
      console.log('Mongoose default connection is open')
    })
    process.on('SIGINT', function () {
      mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
      })
    })
  }
}

export default new MongooseStart()
