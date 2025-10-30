// -----------------------------
//  SERVER SETUP 
// -----------------------------

// 1. Import core dependencies
const express = require("express");
const path = require("path");
const formRouter = require("./routes/formRoutes");

// 2. Initialize the app
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", formRouter);


// 8. Start server
app.listen(PORT, () => {
  console.log(`✅ Server is live at: http://localhost:${PORT}`);
});
