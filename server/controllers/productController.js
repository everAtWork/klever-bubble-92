
const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req,res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if(info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                })
                
            }

        const product = await Product.create({name, price, brandId, typeId, img: fileName})

        return res.json(product) 
        } catch (error) {
            next(ApiError.badReq(e.msg))
        }
    }
    async getAll(req,res) {
        const {brandId, typeId, page, limit} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if (!brandId && !typeId) {
            products = await Product.findAndCountAll({limit, offset})
        } 
        if (brandId && !typeId) {
            products = await Product.findAndCountAll({where: {brandId}, limit, offset})
        } 
        if (!brandId && typeId) {
            products = await Product.findAndCountAll({where: {typeId}, limit, offset})
            
        } 
        if (brandId && typeId) {
            products = await Product.findAndCountAll({where: {brandId, typeId}, limit, offset})
            
        } 
        return res.json(products)
    }
    async getSingleProduct(req,res) {
        const {id} = req.params
        const product = await Product.findOne({
            where: {id},
            include: [{model: ProductInfo, as:'info'}]
        })
        return res.json(product)
        }
}

export default new ProductController()