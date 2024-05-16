const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const {
  AdminUserDetails,
} = require("../../models/adminUserDetails/adminUserDetails");
const encryptPassword = require("../../utils/hashingPassword");
const { sendResponse } = require("../../helper/responseHelper");

module.exports = {
  //route:/api/v1/admin/registerAdmin
  //access:public
  registerAdmin: async (req, res, next) => {
    try {
      // Hashing password
      req.body.password = encryptPassword(req.body.password);
      let existUser = await AdminUserDetails.findOne({
        $or: [
          {
            $and: [{ username: req.body.username }, { username: { $ne: "" } }],
          },
          { $and: [{ email: req.body.email }, { email: { $ne: "" } }] },
        ],
      });

      if (existUser) {
        sendResponse(200, null, "Admin Already Exist",res);
      } else {
        const newAdmin = new AdminUserDetails(req.body);
        const result = await newAdmin.save();
        sendResponse(200, null, "Admin created successfully",res);
      }
    } catch (error) {
      next(new Error(error));
    }
  },

  //route:/api/v1/admin/loginAdmin
  //access:public
  loginAdmin: async (req, res, next) => {
    try {
      const existUser = await AdminUserDetails.findOne({
        $or: [
          {
            $and: [{ username: req.body.username }, { username: { $ne: "" } }],
          },
          { $and: [{ email: req.body.email }, { email: { $ne: "" } }] },
        ],
      });
      if (!existUser) {
        sendResponse(404, "Admin Credentials Not Found", null,res);
      } else {
        const passwordComparision = compareSync(
          req.body.password,
          existUser?.password
        );
        if (!passwordComparision) throw new Error("Password dose not match");

        // Create Token
        const jsowebtoken = sign(
          { id: req.body.email || req.body.username },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: process.env.JWT_TOKEN_EXPIRESIN,
          }
        );
        sendResponse(200, null, {
          jwt: jsowebtoken,
          role: existUser?.role,
          user: req.body.email || req.body.username,
        },res);
       
      }
    } catch (error) {
      next(new Error(error));
    }
  },
};
