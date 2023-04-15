const User = require("../model/userSchema");
const csvtojson = require("csvtojson");
const data = '/Users/shubham.s.kumar3/Desktop/User-Management-System/controller/data.csv';

exports.exportData = async (req, res) => {
  try {
    const jsonArray = await csvtojson().fromFile(data);
    const userData = await User.create(jsonArray);
    console.log("Data saved to MongoDB!");
    return res.status(200).json({
      status: "Success",
      message: "Data Saved to Mongodb",
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: "There is some error in saving data",
      error
    });
  }
};
