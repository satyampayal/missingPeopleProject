import app from "./app.js";
import { configDotenv } from "dotenv";
configDotenv();
import connectToDB from "./dbConfig/db.js";
const port=process.env.PORT;
connectToDB(process.env.DB_URL);

app.listen(port,()=>console.log(`App is listen at ${port}`));

