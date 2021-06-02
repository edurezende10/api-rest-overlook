const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    products:[
       { type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }
    ],
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    address:{
        street:{
            type: String,
            required: true
        },
        number:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        }
    },
    payment:{
        card:{
            number:{
                type:String
            }
        },
        invoice:{
            bank:{
                type:String
            }
        }
        
    }
});
module.exports = mongoose.model('Cart',Schema)
