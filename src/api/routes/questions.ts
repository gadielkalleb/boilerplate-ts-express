import { Router } from "express";
import * as asyncHandler from "express-async-handler";
import { QuestionsController } from "../../services";
import { QuestionModel } from "../../models";

const Question = new QuestionsController(QuestionModel);

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const questionsList = await Question.getQuestions();
    return res.json({
      questionsList,
    });
  })
);

export default router;
