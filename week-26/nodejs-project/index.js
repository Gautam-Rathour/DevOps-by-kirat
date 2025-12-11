const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World! 11111");
})

app.listen(3000);

console.log("ENV VARIABLE");
console.log(process.env.DATABASE_URL);