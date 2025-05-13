const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.send("Hello Dimithri! Happy Coding");
});

app.listen(port, () => {
  console.log(`Daily Hustle app listening on port ${port}`);
});
