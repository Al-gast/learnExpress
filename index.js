//instantiate express module here
const express = require("express");

//use express in app variable here
const app = express();

//define the server port here
const PORT = 8000;

//create the homepage route here and inside it create res means, response, and it send string "Hello Express!" to the API
app.get("/", (req, res) => {
  res.send("Hello Semuanya");
});

// Create listen here
app.listen(PORT, () => console.log(`Server running on server ${PORT}`));
