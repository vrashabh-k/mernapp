const express=require('express')
const router=express.Router()
const User=require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/creatuser",
    [
body('email').isEmail(),
body('name').isLength({min:5}),
body('password','Incorrect password').isLength({min:5})
    ],
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()})
        }

    try {
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            location:req.body.location
        }).then(res.json({success:true}))   
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

router.post("/loginuser",
    async (req,res)=>{
        let email = res.body.email;
    try {
        let useremail = await User.findOne({email});
        if(!useremail){
            return res.status(400).json({ errors: "Try logging with correct credentials"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

module.exports=router;