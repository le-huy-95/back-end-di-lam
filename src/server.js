import express from "express";
import congigViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
// config view engine
congigViewEngine(app);
// init webrouter
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("server running on the port " + PORT);
});
