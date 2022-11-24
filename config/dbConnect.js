const mongoose = require ("mongoose");


// connection to the data base

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Data base is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;