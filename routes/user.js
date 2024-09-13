const express=require('express')
const router= express.Router();
const users=require('../users.json')
const UserController= require('../controllers/userController')

router.get('/users' , (req,res)=>{
    UserController.getAllUsers(req,res)
})
module.exports=router;