import express, { statica } from "express";
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(statica("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
