const mongoose = require( 'mongoose' );

const connectDB = async () => {
    try{
        const connect = await mongoose.connect("mongodb+srv://MALIK2004:MALIK2004@cluster0.jyqcmva.mongodb.net/SkillUpTechie");
        console.log("Database Connected: ",connect.connection.host, connect.connection.name);
    } catch(er) {
        console.log("Database Connection Failed");
        console.log(er);
        process.exit(1);
    }
};

module.exports = connectDB;