const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = 'mongodb+srv://gofood:gofood@gofood.anvmd.mongodb.net/gofooddb?retryWrites=true&w=majority&appName=gofood';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        console.log();  // This will print the array of food items data
    } catch (err) {
        console.log("Error:", err);
    }
};

module.exports = mongoDB;









// const mongoose = require('mongoose');
// const mongoURI='mongodb+srv://gofood:gofood@gofood.anvmd.mongodb.net/gofooddb?retryWrites=true&w=majority&appName=gofood';

// const mongoDB=async()=>{
//     await mongoose.connect(mongoURI,{ useNewUrlParser: true},async(err,result)=>{
//     if(err) console.log("----",err)
//     else{
//         console.log("Connected");
//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(function(err,data){
//             if(err) console.log(err);
//             else console.log();
//         })
//     }
//     });
// }

// module.exports=mongoDB;     