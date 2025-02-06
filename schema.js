const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    price : {
        type : Number,
        required : true
    }
})

const menuschemas = mongoose.model("menuschemas",menuSchema)

// export default a;
module.exports = menuschemas;