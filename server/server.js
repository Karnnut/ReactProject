const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 8000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/test", (req, res) => {
  res.send({
    message: "Your React frontend is connected to the Node-Express backend!",
  });
});
