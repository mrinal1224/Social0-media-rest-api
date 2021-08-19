const router = require('express').Router()



router.get('/' , (req , res)=>{
    res.send('hey Its the User')
})

module.exports = router