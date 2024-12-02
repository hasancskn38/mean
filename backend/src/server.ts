import express from "express";
//only needed for development process bc of two different localhosts
import cors from "cors";

// creates an express application 
const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost4200"]
}));

//API
app.get("/api/user", (req, res) => {
    res.send("Hello World");
});

const port = 5000;
app.listen(port, () => {
    console.log("Website served at localhost", port);
})


