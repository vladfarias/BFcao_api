const Walker = require('./../models/walkerModel');


exports.getAllWalker = async (req, res)=>{
    try{
        const walkers = await Walker.find()
        res.status(200).json({
            status: 'succsess',
            results: walkers.length,
            data:{
                walkers
            }
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: ` Bad request ${err}`
        })
    }
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
            message: `Bad request ${err}`
        })
    }

};

 exports.getWalker =  async (req, res)=>{

    try{
        const walker = await Walker.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                walker
            }
        });

    }catch(err){
        res.status(400).json({
            status: 'fail',
            message:`Bad request ${err}`
        });
    }
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