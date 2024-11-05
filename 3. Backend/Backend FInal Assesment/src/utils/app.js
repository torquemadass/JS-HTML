import "dotenv/config";
import express from "express";
import router from "../routes/index.routes.js"

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`); 
});

