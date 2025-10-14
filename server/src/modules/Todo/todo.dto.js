const joi= require("joi")
const listDTo=joi.object({
title:joi.string().min(3).required(),
description: joi.string().required(),

})
module.exports={
    listDTo
}
