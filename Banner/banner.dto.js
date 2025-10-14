const joi=require("joi")
const BannerDto=joi.object({
title:joi.string().required(),
description:joi.string().required(),
link:joi.string().required(),
status:joi.string().required(),
image:joi.string().required()
})
module.exports={
BannerDto
}