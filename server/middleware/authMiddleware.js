import * as jwt from 'jsonwebtoken'

module.exports = function(req,res,next){
    if (req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers?.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({msg: "NO tokken"})
        }
        const decoded = jwt.verify(token, process.env.HIDN_KEY)
        req.user = decoded
        next() 
    }catch(e) {
        res.status(403).json({msg: 'Non authorized'})
    }
}