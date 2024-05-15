const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define User Schema
const adminUserDetailsSchema = new Schema({
  username: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple documents to have no value for this field
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

adminUserDetailsSchema.clearIndexes(
  { username: 1, email: 1 },
  { unique: true, partialFilterExpression: { email: { $exists: true } } }
)


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
