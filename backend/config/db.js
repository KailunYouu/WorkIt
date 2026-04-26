const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://omaimasharhan_db_user:A3JTtsk59PcUtULl@cluster0.gxiadox.mongodb.net/";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;