import { Router } from "express";
import * as asyncHandler from "express-async-handler";
import { AnswersControlller } from "../../services";
import { AnswersModel } from "../../models";

const Answers = new AnswersControlller(AnswersModel);

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const answersList = await Answers.getAll();
    return res.json({
      answersList,
    });
  })
);

export default router;
