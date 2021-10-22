import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        return this._user = user 
    }
    get isAuth(){
        return this._user 
    }
    get User(){
        return this._user 
    }
}