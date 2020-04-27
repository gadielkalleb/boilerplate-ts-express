import { Schema, Model } from "mongoose";

export default class Questions {
  private questionModel: Model<any>
  constructor(questionModel) {
    this.questionModel = questionModel
  }

  public async getQuestions () {
    try {
      const questions = await this.questionModel.find()
      return questions
    } catch (error) {
      return error
    }
  }

  public async questionById(id: Schema.Types.ObjectId) {
    try {
      const question = await this.questionModel.findById(id)
      return question
    } catch (error) {
      return error
    }
  }
}
