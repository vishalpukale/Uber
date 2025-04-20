const mongoose = require("mongoose")

const connectToDb = () => {
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,  
    })
    .then(()=> console.log('Connected to DB'))
    .catch(err => console.error(err))
}

module.exports = connectToDb