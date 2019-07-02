const express = require("express");

const server = express();

//Query params = ?test=1
//Route params =users/1
//Request body = { "name": "Sergio", "email": "Sergio@gmail.com" }

server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  return res.json({ message: `Find the User ${id}` });
});

server.listen(3002);
