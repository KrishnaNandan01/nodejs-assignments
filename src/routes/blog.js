const router = require('express').Router();
const { query } = require('express');
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog',async(req,res)=>{
   const {page,search} = req.query;
   try{
    const user = await Blog.find({topic:search}).skip((page-1)*5);
    res.json({
        status :"succes",
        result:user
    })
   }
   catch(e){
    res.json({
        status :"failed",
        message :e.message,
    })

   }
});

router.post("/blog",async(req,res)=>{
    try{
        const user = await Blog.create(req.body);
        res.json({
            status:"success",
            result:user
        })
       
    }catch(e){
        res.json({
            status :"failed",
            message :e.message,
        })
    }
})

router.put("/blog/:id",async(req,res)=>{
    try{
        const user = await Blog.update({_id:req.params.id},req.body);
        const newUser = await Blog.find({_id:req.params.id})
        res.json({
            status:"succes",
            result:newUser,
        })


    }catch(e){
        res.json({
            status :"failed",
            message :e.message,
        })
    }
})

router.delete("/blog/:id",async(req,res)=>{
    try{

        const user = await Blog.deleteOne({_id:req.params.id},req.body);
        const newUser = await Blog.find();
        res.json({
            status:"succes",
            result:newUser,
        })


    }catch(e){
        res.json({
            status :"failed",
            message :e.message,
        })
    }
})


module.exports = router;