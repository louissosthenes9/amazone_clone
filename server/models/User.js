import mongoose from "mongoose";
mongoose.set('strictQuery', true)
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
                  const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/
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
            required: false,
        },

        type:{
            type:String,
            default:'user',
        }

    }
);

let User = mongoose.model('User',userSchema);
export default User 
