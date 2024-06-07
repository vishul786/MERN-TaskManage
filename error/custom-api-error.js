class CustomAPIError extends Error{
    constructor (message, statuscode){
        super(message)
        this.statuscode = statuscode
    }
}

const createCustomError = (msg, statuscode) => {
    return newCustomAPIError(msg,statuscode)
}

module.exports = {createCustomError, CustomAPIError}
