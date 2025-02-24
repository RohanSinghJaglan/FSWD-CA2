const { default: mongoose } = require("mongoose");

mongooseSchema = mongoose.Schema({
    name: String {
        type: String,
        required: true,
    },
    location: ArrayofObjects{
        type: Array,
        required: true,
    },
    cuisine: String{
        type: String,
        required: true,
    },
    rating:Number{
        type: Number,
        required: true,
    },
    menu: String
        {name: String,required:true ,
             price: Number, 
             description: String,required:true
            },
    
       
    
});

module.exports = mongoose.model('Restaurant', mongooseSchema);