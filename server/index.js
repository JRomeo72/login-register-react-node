import { config } from "dotenv";
import app from "./src/app.js";
config();

let PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server run on port:${PORT}`))