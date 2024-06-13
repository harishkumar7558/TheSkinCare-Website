import express from "express"
import run from "./src/Config.mjs";

let app=express();


app.get("/",(req,res)=>{
    run(req,res);
})
app.listen(3004);