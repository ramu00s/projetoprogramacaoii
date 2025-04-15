import express from "express";
import pkg from "body-parser";
import router from "./routes/router.js";
import db from "./database/database.js";

const app = express();
const { jason, urlencoded} = pkg;

app.use(express.json());
app.use(urlencoded({extended: true}));


app.listen(3000, function() {
    console.log("Listening to port 3000");
});

app.use("/", router);