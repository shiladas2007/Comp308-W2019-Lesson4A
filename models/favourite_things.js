let mongoose = require('mongoose');
//create model class
let favThingsSchema = mongoose.Schema({
    name: String,
    description: String
},
    {
        collection: "favourite-things"
    }

);
module.exports = mongoose.model("demo", favThingsSchema);