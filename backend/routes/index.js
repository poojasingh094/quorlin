const express = require('express')
const router = express.Router()

const questionRouter = require('./Question')
const answerRouter = require('./Answer')

router.get('/',(req, res) => {
    res.setDefaultEncoding("This api is reserve for quorlin")
})

router.use('/questions', questionRouter)
router.use('/questions', answerRouter)

module.exports = router
