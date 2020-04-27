import { Router } from "express";

const router = Router()

router.get('/', (req, res, next) => {
  return res.json({
    name: 'gadiel kalleb'
  })
})

export default router
