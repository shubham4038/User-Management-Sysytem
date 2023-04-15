const app = require('./app')
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config({path : './config.env'})
mongoose.connect("mongodb://localhost:27017/User-Management").then(()=>{
    console.log("DB connected succesfully")
}).catch(err =>{
    console.log(err);
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`);
  });