import { Router } from 'express'

import questions from './routes/questions'

const router = Router()

router.get('/', (req, res, next) => (res.status(200).send('hello word')))
router.use('/questions', questions)

export default router


