const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => { 
    mongoose.connect(process.env.db_URL)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(`error connecting to db : ${err}`))
}

module.exports = connect;
// export default connect;