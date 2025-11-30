import connectDB from "../DB/connectDB.js"
import app from "./app.js";


connectDB()
.then(()=>{
    app.on("error", ()=>{
        console.log(`There is something wrong ith connectDB function ${error}`)
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`The server is running at port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log(`Error while connecting with the database ${error}`);
});