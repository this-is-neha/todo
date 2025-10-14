const slugify = require("slugify");
const BannerModel = require("./banner.model")
class BannerService {
    transformData = (req) => {
        const payload = req.body;
        const file = req.file
        payload.slug = slugify(payload.title, { lower: true })
        return ({
            title: payload.title,
            slug: payload.slug,
            image: file?.filename,
            description: payload.description,
            link: payload.link,
            status: payload.status

        })
    }
    create = async (data) => {
        try {
            console.log("banner data is ", data)
            const bannerObj = new BannerModel(data);
            return await bannerObj.save()
        }
        catch (exception) {
            throw exception
        }
    }
    listAll = async () => {
        try {
            const bannerObj = await BannerModel.find()
            return bannerObj
        }
        catch (exception) {
            throw exception
        }
    }
    listOne = async (filter) => {
        try {
            const bannerObj = await BannerModel.findOne(filter);
            return bannerObj
        }
        catch (exception) {
            throw exception
        }
    }
    listById = async (id) => {
        try {
            const bannerObj = await BannerModel.findById(id);
            return bannerObj
        }
        catch (exception) {
            throw exception
        }
    }
    update=async(id,data)=>{
        try{
    console.log("New data is ",data)
const bannerObj=await BannerModel.findByIdAndUpdate(id, data, { new: true })
return bannerObj
        }
        catch(exception){
            throw exception
        }
    }
delete=async(id)=>{
    try{
const bannerObj= await BannerModel.findByIdAndDelete(id)
return bannerObj
    }
    catch(exception){
        throw exception
    }
}
}
const bannerSvc = new BannerService()
module.exports = bannerSvc