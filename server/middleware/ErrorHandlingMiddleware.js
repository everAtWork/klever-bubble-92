import ApiError from '../error/ApiError';

module.exports = function(err,req,res,next){
    if(err instanceof ApiError){
        res.status(err.stat).json({msg: err.msg})
    }
    return res.status(500).json({msg: "unForeSeen erRor"})
} 