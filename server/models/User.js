const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
            validate:{
                validator:(value)=>{
                  const re = /^{s+6}/
                    return value.match(re);
                },

                message:'Please enter a  valid email address'
            }
        },

        password: {
            type: String,
            required: true,
            validate :{
                validator: (value)=>{
                    return value.length >8;
                },
                message:"The password must be six characters long"
            }
        },

        address : {
            type: String,
            default:'',
            required: true,
        },

        type:{
            type:String,
            default:'user',
        }

    }
);

const User = mongoose.model('User',userSchema);
module.exports = User;