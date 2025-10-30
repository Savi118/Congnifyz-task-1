exports.renderForm = (req, res, next) => {
  res.render("index", { name: "", email: "", message: "", submitted: false });
};
exports.handleForm = (req, res) => {
  const { name, email, message } = req.body;
  res.render("index", { name, email, message, submitted: true });
};
