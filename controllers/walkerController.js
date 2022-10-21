const Walker = require('./../models/walkerModel');


exports.getAllWalker =  (req, res)=>{
    console.log(req.message);
    res.status(500).json({
        status: 'error',
        message: 'This route is beeing buildin up...'
    })

};

 exports.createWalker =  async (req, res)=>{

    try{
        const newWalker = await Walker.create(req.body);
        res.status(201).json({
            status:'success',
            data: {
                walker: newWalker
            }
        })
        
    }catch(err){
        res.status(400).json({
            status:'fail',
            message: err
        })
    }

};

 exports.getWalker =  (req, res)=>{
    console.log(req.message);
    res.status(500).json({
        status: 'error',
        message:'This route is beeing buildin up...'
    })
};


exports.updateWalker =  (req, res)=>{
    console.log(req.message);
    res.status(500).json({
        status:'error',
        message:'This route is beeing buildin up...'
    })
};

 exports.deleteWalker = (req, res) =>{
    console.log(req.message);
    res.status(500).json({
        status: 'error',
        message:'This route is beeing buildin up...'
        })
};