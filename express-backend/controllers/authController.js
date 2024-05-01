import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import prisma from '../lib/prisma.js';




export const register = async (req, res)=>{
    const {username, email, password} = req.body;
    // hash password
    
    // console.log(hashedPassword)

    // create new user and save to database
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })
        res.status(201).json({message:'User Created Successfully'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Failed to create user'})
        
    }
    

   
}

export const login =async (req, res)=>{
    const {username, password} = req.body;

   try {
     // check if user exists
     const user = await prisma.user.findUnique({
        where:{username:username}
     })

     if(!user) return res.status(401).json({message:'Invalid Credentials!'});

      // check if password is correct

     const isPasswordValid = await bcrypt.compare(password, user.password);
     if(!isPasswordValid) return res.status(401).json({message:'Invalid Credentials!'});


    // generate a cookie token and send to user
    const age = 1000 * 60 * 60 * 24 * 7

    const token = jwt.sign({
        id:user.id.toString(),
        isAdmin:false
    }, process.env.JWT_SECRET_KEY,{expiresIn: age})

    const {password:userPassword, ...userInfo} = user


   

    res.cookie('token', token, {
        httpOnly:true,
        // secure:true
        maxAge: age
    }).status(200).json(userInfo)
    
   } catch (error) {
    console.log(error);
    res.status(500).json({message:'Login failed with error 500'})
   }

}

export const logout = async (req, res)=>{
    
    res.clearCookie('token').status(200).json({message:'Logout Successfull'})

}