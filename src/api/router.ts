import { Router } from 'express'

export default (router: Router) => {

  router.get('/', (req, res, next) => {
    return res.status(200).send('hello api')
  })

  return router
  
}