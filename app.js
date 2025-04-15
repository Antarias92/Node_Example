const express = require("express");
const app = express();
const port = process.env.PORT;


app.get("/", (request, response) => {
    response.send("Hello");
});
app.get("/routing", (request, response) => {
    response.send("We routing");
});
app.listen(3002, () => console.log("Server is running on localhost: 3002"));