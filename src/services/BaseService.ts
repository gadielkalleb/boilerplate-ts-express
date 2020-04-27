import { Schema, Model } from "mongoose";

export default class BaseServices {
  private model: Model<any>
  constructor(model) {
    this.model = model
  }

  public async getAll (filter = {}, page = 0, limit = 10) {
    try {
      const questions = await this.model
        .find(filter)
        .skip(page)
        .limit(limit)
      return questions
    } catch (error) {
      return error
    }
  }

  public async getById(id: Schema.Types.ObjectId) {
    try {
      const result = await this.model.findById(id)
      return result
    } catch (error) {
      return error
    }
  }

  public async create(input) {
    try {
      const instance = new this.model(input)
      await instance.save()
      return instance
    } catch (error) {
      return error
    }
  }
}
