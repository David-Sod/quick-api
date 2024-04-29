const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/health", (req, res) => res.send("Ok"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

 