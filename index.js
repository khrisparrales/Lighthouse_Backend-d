const express = require("express");
const app = express();
const PORT = process.env.PORT || 3009;
const mongoose = require("mongoose");

//connect to mongodb
mongoose
    .connect(
        "mongodb+srv://admin:superadmin@cluster0.d2xlq.mongodb.net/Lighthouse?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }

    )
    .then(() => {
        console.log("Connect to mongodb success");
    })
    .catch(() => {
        console.log("Connect to mongodb faill");
    });

//listen server express
app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});