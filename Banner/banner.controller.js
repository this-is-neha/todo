const bannerSvc = require("./banner.service")
const jwt = require('jsonwebtoken');
const authSvc = require("../server/src/modules/auth/auth.service")
class BannnerController {
    createBanner = async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            console.log("Auth header is ", authHeader)
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({ message: "Authorization header missing or invalid" });
            }

            const token = authHeader.split(' ')[1];
            console.log("token is ", token)
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await authSvc.findOneUser({ _id: decoded.sub });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }




            const obj = bannerSvc.transformData(req)
            obj.createdBy = user._id;
            const banner = await bannerSvc.create(obj)
            res.json({
                data: banner,
                message: "banner created sucecssflullu",
                meat: null
            })
        }
        catch (exception) {
            throw exception
        }
    }
    getAll = async (req, res, next) => {
        try {
            const banner = await bannerSvc.listAll()
            res.json({
                data: banner,
                message: "Banner LIst fetched ",
                meta: null
            })
        }
        catch (exception) {
            throw exception
        }
    }

  findforOneUser=async(req,res,next)=>{
            try {
         const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).json({ message: 'Unauthorized: No token' });
        }
    
        const token = authHeader.split(' ')[1];
        let decoded;
        try {
          decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
          return res.status(401).json({ message: 'Invalid or expired token' });
        }
    
        const user = await authSvc.findOneUser({ _id: decoded.sub });
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
    
        const userId = user._id;
        const banners = await bannerModel.find({ createdBy: userId });
        res.json({ result: banners });
      } catch (err) {
        res.status(500).json({ message: "Server error" });
      }
        }


    listOne = async (req, res, next) => {
        try {
            const title = req.params.title
            const banner = await bannerSvc.listOne({ title: title })
            res.json({
                data: banner,
                message: "Banner Detail ",
                meta: null
            })
        }
        catch (exception) {
            throw exception
        }
    }
    listById = async (req, res, next) => {
        try {
            const id = req.params.id
            const banner = await bannerSvc.listById(id)
            res.json({
                data: banner,
                message: "Banner fetched by ID",
                meta: null
            })
        }
        catch (exception) {
            throw exception
        }
    }
    updatebanner = async (req, res, next) => {
        try {
            const id = req.params.id
            const banner = await bannerSvc.update({ _id: id }, req.body)
            console.log("Updated", banner)
            res.json({
                data: banner,
                message: "banner updated",
                mets: null
            })
        }
        catch (exception) {
            throw exception
        }
    }
    deleteBanner = async (req, res, next) => {
        try {
            const id = req.params.id
            const banner = await bannerSvc.delete(id)
            res.json({
                data: banner,
                result: "Banner deleted",
                meta: null
            })
        }
        catch (exception) {

        }
    }
}
const bannerCtrl = new BannnerController()
module.exports = bannerCtrl