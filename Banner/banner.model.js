const mongoose = require("mongoose")
const BannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: String,

    description: {
        type: String,
        required: true

    },
    status: String,
    image: String,
    link: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    },
    updatedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    }
}, {
    timestamps: true,
    autoIndex: true,
    autoCreate: true
})
const BannerModel = new mongoose.model("Banner", BannerSchema)
module.exports = BannerModel