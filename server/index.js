const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Country = require("./models/Countries");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/Countries")
  .then(() => {
    console.log("connected..");
  })
  .catch(() => {
    console.log("faild");
  });

app.get("/", (req, res) => {
  Country.find({})
    .then((country) => res.json(country))
    .catch((err) => res.json(err));
});

app.get("/getCountry/:id", (req, res) => {
  const id = req.params.id;
  Country.findById({ _id: id })
    .then((country) => res.json(country))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  Country.findByIdAndUpdate(
    { _id: id },
    {
      c_name: req.body.c_name,
      network: req.body.network,
      vpmn: req.body.vpmn,
      imsi: req.body.imsi,
      dataCost: req.body.dataCost,
    }
  )
    .then((country) => res.json(country))
    .catch((err) => res.json(err));
});

app.post("/create", (req, res) => {
  Country.create(req.body)
    .then((country) => res.json(country))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Country.findByIdAndDelete({ _id: id })
    .then((country) => res.json(country))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("Server Running......");
});
