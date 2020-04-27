import { Router } from 'express'

import questions from './routes/questions'
import answers from './routes/answers'

const router = Router()

router.get('/', (req, res, next) => (res.status(200).send('hello word')))
router.use('/questions', questions)
router.use('/answers', answers)

export default router
