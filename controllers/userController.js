const User = require('./../models/userModel');

exports.getAllUsers = async (req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json({
            status:'succsess',
            results: users.length,
            data: {
                users
            } 

        });
        
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message:`Bad request ${err}`
        });
    }

};

 exports.createUser = async (req, res) =>{
    try{
        const newUSer = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data:{
                user: newUSer
            }
        });

    } catch(err){
        res.status(400).json({
            status:'fail',
            message: err
        });

    }
    

};

 exports.getUser = async (req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data: {user}
        });

    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: `Bad request ${err}`
        });

    }

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