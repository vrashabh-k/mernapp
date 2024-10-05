const express=require('express')
const router=express.Router()
const User=require('../models/User')
const { body, validationResult } = require('express-validator');

//For signup
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

//For login
router.post("/loginuser",
    [
body('email').isEmail(),
body('password','Incorrect password').isLength({min:5})
    ],
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()})
        }
        let email = req.body.email;
    try {
        let userdata = await User.findOne({email});
        if(!userdata){
            return res.status(400).json({ errors: "Try logging with correct credentials"})
        }
        if(req.body.password!==userdata.password){
            return res.status(400).json({ errors: "Try logging with correct credentials"})
        }
        return res.json({success:'true'})
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

module.exports=router;