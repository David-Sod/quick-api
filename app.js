const express = require("express");
const app = express();
const tokens = require("./tokens.json")
const port = process.env.PORT || 3001;

app.get("/health", (req, res) => res.send("Ok"));

app.get("/tokens/:id",async (req,res)=>{
  console.log("tokens",tokens)
  const data = tokens[req.params.id];
  return res.json(data).send();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

 