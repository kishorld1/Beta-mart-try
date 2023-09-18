const Mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log("db connection failed", error.message);
  }
};
dbConnect();
