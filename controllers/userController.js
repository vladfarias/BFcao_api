const User = require('./../models/userModel');

exports.getAllUsers = (req, res)=>{
    console.log(req.message);
    res.status(500).json({
        status: 'error',
        message: 'This route is beeing buildin up...'
    })

};

 exports.createUser = async (req, res) =>{
    try{
        const newUSer = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data:{
                user: newUSer
            }
        })
    } catch(err){
        res.status(400).json({
            status:'fail',
            message: err
        })

    }
    

};

 exports.getUser = (req, res)=>{
    console.log(req.message);
    res.status(500).json({
        status: 'error',
        message:'This route is beeing buildin up...'
    })

};


exports.updateUser = (req, res)=>{
    console.log(req.message);
    res.status(500).json({
        status:'error',
        message:'This route is beeing buildin up...'
    })

};

 exports.deleteUser = (req, res)=>{
    console.log(req.message);
    res.status(500).json({
        status: 'error',
        message:'This route is beeing buildin up...'
    })
};