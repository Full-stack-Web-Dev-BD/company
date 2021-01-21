const  userRouter=require('express').Router()
const userController=require('../controller/userController')

userRouter.post('/register',userController.register)
userRouter.post('/login',userController.login)
userRouter.get('/delete/:id',userController.deleteUser)
userRouter.get('/find-users',userController.findUser)

module.exports=userRouter