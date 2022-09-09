const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    carteira: Object
});

// UserModel.pre('save', (next) => {
//     let user = this;
//     if(!user.isModified('password')) return next()
//     bcrypt.genSalt(10, (error, salt) => {
//         if(error) return next(error);
//         bcrypt.hash(user.password, salt, (error, hash) => {
//             if(error) return next(error)
//             user.password = hash;
//             next()
//         },    
//     })
// })

const User = mongoose.model('User', UserModel);
module.exports = User;