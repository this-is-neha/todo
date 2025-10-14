const { required } = require("joi")
const mongoose = require("mongoose")

const listSchmea = new mongoose.Schema({
   
    title: {
        type: String,
        min: 3,
        required: true
    },
    slug:{
        type: String,
    },
    description: {
        type: String,
        required: true
    },



}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
})

const listModel = mongoose.model("Barnd", listSchmea)

module.exports = listModel