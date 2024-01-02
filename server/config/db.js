const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(mongodb+srv://200612:12345@cluster0.9d1ek26.mongodb.net/);
    console.log(`Database Connected: `);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
