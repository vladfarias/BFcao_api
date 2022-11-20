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
    };
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
    };
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

    };
};

exports.getUserByEmail = async (req, res)=>{

    try{
        const user = await User.findOne({
            email: req.params.email
        })
        res.status(200).json({
            status:'success',
            data: {user}
        });

    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: `Bad request ${err}`
        });

    };
};

exports.updateUser = async (req, res)=>{

  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // with that the docummnet is the one returned
        runValidators: true //each time a documents is updated the validators specified in the schema will run again
    });

    res.status(201).json({
        status: 'success',
        data: {
            user
        }
    })
  }catch(err){
    res.status(400).json({
        status: 'fail',
        message: `Bad request ${err}`
    })
  }

};


 exports.deleteUser = async (req, res)=>{

    try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null
        })

    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: `Bad request ${err}`
        });
    };   
};