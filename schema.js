const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const userSchema= mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
        return next()
    try{
        const salt = await bcrypt.genSalt(10)
        const hpass = await bcrypt.hash(this.password,salt)
        this.password = hpass
        next()
    }
     catch(e){
        next()
     }
})

module.exports = mongoose.model("User", userSchema);