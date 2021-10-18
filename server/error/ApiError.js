class ApiError{
    constructor(stat, msg) {
        super();
        this.stat = stat
        this.msg = msg
    }

    static badReq(msg) {
        return new ApiError(404, msg)
    }
    static internal(msg) {
        return new ApiError(500, msg)
    }
    static forbidden(msg) {
        return new ApiError(403, msg)
    }
}