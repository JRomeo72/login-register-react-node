import { config } from "dotenv";
import app from "./src/app.js";
import dbConnect from "./src/dbConnect.js";
config();

let PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {

    // > Con Promesa 
    /*try {
        let message = await dbConnect()
        console.log(message)
    } catch (error) {
        console.log(error)
    }*/

    // > Sin Promesa 
    dbConnect()
    
    console.log(`Server run on port:${PORT}`);
    console.log(`http://localhost:${PORT}`)

})