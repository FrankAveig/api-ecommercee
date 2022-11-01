const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    surname:{
        type:String,
        required: true,
    },
    mail:{
        type: String,
        required:true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'email invalido'],
    },
    city:{
        type:String,
    },
    age:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        enum:[
            'customer',
            'admin'
        ],
        default:'customer',
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:'wwww.hola.com'
    },
    salt:{
        type:String,
    }
})

UserSchema.plugin(uniqueValidator)

UserSchema.methods.encryptString = function(stringToEncript,salt){
    return crypto.pbkdf2Sync(stringToEncript,salt,10000,5,'sha512').toString('hex');
}


UserSchema.methods.hashPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = this.encryptString(password,this.salt)
}

UserSchema.methods.verifyPassword = function(password){
    return this.encryptString(password,this.salt) === this.password;
}

UserSchema.methods.generateJWT = function(){
    return jwt.sign({idUser: this._id,type:this.type},process.env.SECRET)
}

UserSchema.methods.onSingGenerateJWT = function(){
    return{
        idUser: this._id,
        type: this.type,
        token: this.generateJWT(),
    }
}

mongoose.model('User',UserSchema,'collectionUser')


