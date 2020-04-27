import { Schema, Model } from "mongoose";

export default class Questions {
  private questionModel: Model<any>
  constructor(questionModel) {
    this.questionModel = questionModel
  }

  public async getQuestions (filter = {}, page = 0, limit = 10) {
    try {
      const questions = await this.questionModel
        .find(filter)
        .skip(page)
        .limit(limit)
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

  public async create(questionInput) {
    try {
      const question = new this.questionModel(questionInput)
      await question.save()
      return question
    } catch (error) {
      return error
    }
  }
}
