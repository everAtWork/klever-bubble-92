import {makeAutoObservable} from 'mobx'

export default class ProductStore {
    constructor() {
        this._types = [
            {id:1, name: "Холодильники"},
            {id:2, name: "Смартфоны"},
        ]
        this._brands = [
            {id:1, name: "Samsung"},
            {id:2, name: "Apple"},
        ]
        this._products = [
            {id:1, name: "iPhone 13", price: 28000, rating: 5, img: },
            {id:2, name: "iPhone X", price: 18000, rating: 4, img: },
            {id:3, name: "iPhone XS", price: 20000, rating: 5, img: },
            {id:4, name: "iPhone XR", price: 16000, rating: 4, img: },
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        return this._brands = brands 
    }
    setProducts(products){
        return this._products = products 
    }


    get types(){
        return this._types 
    }
    get brands(){
        return this._brands 
    }
    get products(){
        return this._products 
    }
}