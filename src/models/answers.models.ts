import { Schema, model } from 'mongoose'
import { questionOrAnswerwsBaseProps } from './commonProps'

const AnswerModel = new Schema({
  ...questionOrAnswerwsBaseProps,
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Questions'
  }
}, { timestamps: true })


export default model('Answers', AnswerModel)
