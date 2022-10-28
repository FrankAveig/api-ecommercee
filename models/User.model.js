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

/* A plugin that validates the uniqueness of a field. */
UserSchema.plugin(uniqueValidator)

/* Encrypting the password. */
UserSchema.methods.encryptString = function(stringToEncript,salt){
    return crypto.pbkdf2Sync(stringToEncript,salt,10000,5,'sha512').toString('hex');
}


UserSchema.methods.hashPassword = function(password){
  /* Generating a random string of 16 characters. */
    this.salt = crypto.randomBytes(16).toString('hex');
    /* Assigning the value of the function `encryptString` to the property `password` of the object
    `this`. */
    this.password = this.encryptString(password,this.salt)
}

/* Verifying the password. */
UserSchema.methods.verifyPassword = function(password){
    return this.encryptString(password,this.salt) === this.password;
}

/* Generating a token. */
UserSchema.methods.generateJWT = function(){
    return jwt.sign({idUser: this._id,type:this.type},process.env.SECRET)
}

/* Creating a token. */
UserSchema.methods.onSingGenerateJWT = function(){
    return{
        idUser: this._id,
        type: this.type,
        token: this.generateJWT(),
    }
}

/* Creating a model called `User` with the schema `UserSchema` and the collection `collectionUser`. */
mongoose.model('User',UserSchema,'collectionUser')


