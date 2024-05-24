require("dotenv").config();
const connectDB = require("./config/dbConnection");
const bcrypt = require("bcrypt");
const {
  AdminUserDetails,
} = require("./models/adminUserDetails/adminUserDetails");

//Connect Mongodb
connectDB();

async function createAdminUser() {
  try {
    // Admin user credentials
    const adminUseremail = process.argv[2];
    const adminPassword = process.argv[3];

    if (!adminUseremail || !adminPassword) {
      console.error("Usage: npm run seed:db <admin_username> <admin_password>");
      process.exit(1);
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // check already exist
    const existUser = await AdminUserDetails.findOne({
      $and: [{ email: adminUseremail }, { email: { $ne: "" } }],
    });

    if (existUser) {
      console.log(`Already Exist on this ${existUser} mail_id`);
      process.exit(0);
    }
    const result = await AdminUserDetails.create({
      email: adminUseremail,
      password: hashedPassword,
      role: "admin",
    });

    if (result) {
      console.log(result);
      process.exit(0);
    }
  } catch (er) {
    console.log(er);
    process.exit(1);
  }
}

createAdminUser();
