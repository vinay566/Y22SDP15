// const mongoose = require("mongoose");
// require("dotenv").config();

// let connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/newbus");
// };

// module.exports= connect;

const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    "mongodb+srv://2200033059cse:1234@cluster0.o4gugo4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true }
  );
};

module.exports = connect;


