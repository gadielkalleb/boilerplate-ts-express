import { Schema, model } from 'mongoose'
import { questionOrAnswerwsBaseProps } from './commonProps'

const QuestionModel = new Schema({
  ...questionOrAnswerwsBaseProps,
  title: {
    type: String,
    maxlength: 300
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answers'
  }]
}, { timestamps: true })


export default model('Questions', QuestionModel)

// {
//   "id": 123,
//   "text": "My question",
//   "user": "username",
//   "creationDate": "2020-01-01 12:00:00",
//   "answers": [
//     {
//       "id": 1234,
//       "text": "My answer",
//       "user": "another.username",
//       "creationDate": "2020-01-01 12:00:00"
//     }
//   ]
// }
