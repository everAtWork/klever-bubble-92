class UserController {
    async registration(req,res) {
        
    }
    async login(req,res) {

    }
    async chq(req,res) {
        const query = req.query
        res.json(query)
    }
}

export default new UserController()