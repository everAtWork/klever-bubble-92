const ApiError = require('../error/ApiError')

class UserController {
    async registration(req,res) {
        
    }
    async login(req,res) {

    }
    async chq(req,res, next) {
        const {id} = req.query
        if(!id){
            next(ApiError.badReq("id's not been assignd"))
        }
        res.json(id)
    }
}

export default new UserController()