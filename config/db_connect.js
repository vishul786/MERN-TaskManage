const mongoose = require("mongoose")
const db_con = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser : true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true
    })
}

module.exports = db_con;