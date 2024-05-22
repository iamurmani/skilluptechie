const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define User Schema
const adminUserDetailsSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,

    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required:true,
    enum: ["user", "admin"],
    default: "user",
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

// Ensure that either username or email is provided
adminUserDetailsSchema.path("username").required(function () {
  return !this.email; // Username is required if email is not provided
}, "Username or email is required");

adminUserDetailsSchema.path("email").required(function () {
  return !this.username; // Email is required if username is not provided
}, "Username or email is required");

// Create and export User model
const AdminUserDetails = mongoose.model(
  "AdminUserDetails",
  adminUserDetailsSchema
);
module.exports = { AdminUserDetails };
