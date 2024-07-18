const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin : true
}));

const port = 5000;
app.listen(port,()=>{
    console.log("Server started at port : ",port);
});

app.get("/",(req,res)=>{
    console.log("Inside get");
    res.send("Hi gajendra");
})

router.get("/login",demo)
