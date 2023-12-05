const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use((req: any, res: any) => {
  res.send({
    status: 200,
    JSON: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Encoding": "utf-8",
      message: "Welcome to the API GraphQL Server",
    },
  });
});

module.exports = app;
