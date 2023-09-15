const express = require('express');
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Article', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("3000", () => {
    console.log("Server is running");
})

// module.exports = router;