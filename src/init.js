import express from "express";
import morgan from "morgan";

// Create express Application
const app = express();
// middleware to write log
const logger = morgan("dev");

const PORT = 4000;

const handleHome = (res, req) => {
  console.log("Somebody is trying to go home.");
  return req.send("WA");
};

app.use(logger);

app.get("/", handleHome);

// callback method
const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT}`);
};

// Listening Request
app.listen(PORT, handleListening);
