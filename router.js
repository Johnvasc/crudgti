const express = require('express')
const router = express.Router()


router.get('/contato', ()=>{
    console.log('fez request em cantato')
})
router.get('/servicos',()=>{
    console.log('fez request em servicos')
})
router.get('/http', (req, res)=>{
    console.log(req)
})
router.post('/post', (req, res)=>{
    console.log(req.body)
})

module.exports = router