const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const {postChildFoundInfo,getChildFoundInfo,postChildMissingInfo,getChildMissingInfo } = require("./firebase")


app.post("/ChildFoundPost", (req, res) => {
    postChildFoundInfo(req, res);
});

app.get('/ChildFoundData', (req, res) => {
getChildFoundInfo(req,res)

})

app.post("/ChildMissingPost", (req, res) => {
    postChildMissingInfo(req, res);
});

app.get('/ChildMissingData', (req, res) => {
getChildMissingInfo(req,res)

})



const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
})