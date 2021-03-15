const { response } = require("express");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
  {
    id: "1",
    text: "Eggs",
  },
  {
    id: "2",
    text: "Banana",
  },
  {
    id: "3",
    text: "Milk",
  },
  {
    id: "4",
    text: "Potato",
  },
  {
    id: "5",
    text: "Bacon",
  },
  {
    id: "6",
    text: "Chicken",
  },
];
app.listen(port, function () {
  console.log("Server is running on port :" + port);
});

app.get("/", function (req, res) {
  res.send(ingredients);
});

app.post("/", function (req, res) {
  var ingredient = req.body;
  if (!ingredient || ingredient.text === "") {
    res.status(500).send({ error: "Your ingredients must have text" });
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
  }
});

app.delete("/", function (req, res) {
  var ingredient = req.body;
  if (!ingredient || ingredient.id === "") {
    res.status(500).send({ error: "Please enter the valid ingredient id" });
  } else {
    ingredients.pop(ingredient);
    res.status(200).send({ info: "Successfully deleted ingredient" });
  }
});
