const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config(); // Load environment variables from .env

const mongoURI = process.env.MONGO_URI;


const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });//useNewUrlParser and useUnifiedTopology are not required
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){
            const foodCategory= await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function(err,catData){
                if (err) console.log(err);
                else{
                    global.food_items = data;
                    global.foodCategory = catData;
                }
            })
        })
        global.food_items=fetched_data;
    } catch (err) {
        console.log("Error:", err);
    }
};

module.exports = mongoDB;



// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);

// const mongoURI = 
// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected to MongoDB");

//         // Fetch food items and categories
//         const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
//         const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

//         // Store the fetched data in global variables
//         global.food_items = fetched_data;
//         global.foodCategory = foodCategory;

//     } catch (err) {
//         console.log("Error:", err);
//     }
// };

// module.exports = mongoDB;
 