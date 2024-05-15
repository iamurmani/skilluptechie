const {AdminUserDetails} =require("../../models/adminUserDetails/adminUserDetails")



module.exports = {
    registerAdmin: async (req, res, next) => {
        //req.body.password = encryptPassword(req.body.password);
        try {        
           // const result =  await AdminUserDetails.create(req.body);;
        //    req.body.username=req.body?.username===""?null:req.body.username
        //    req.body.email=req.body?.email===""?null:req.body.email 

            const newAdmin = new AdminUserDetails(req.body);
            const result= await newAdmin.save();
            res.json({
                success: true,
                message: "Admin created success",
                data: result,
            });
        } catch (error) {
            next(new Error(error));
        }
    }}