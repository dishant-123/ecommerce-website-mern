const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex :true
})
    .then(() => {
        console.log('DataBase connected');
    })
    .catch((error) => {
        console.log(error)
    })