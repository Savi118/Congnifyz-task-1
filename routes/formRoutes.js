const express = require("express");
const formRouter = express.Router();

const formController = require("../controllers/formController");

formRouter.get("/", formController.renderForm);
formRouter.post("/", formController.handleForm);

module.exports = formRouter;
