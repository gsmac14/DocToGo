// Routes
// =============================================================
var path = require("path")

module.exports = function(app) {
  // GET route for getting all html pages
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/patient_form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/patient_form.html"));
  });
  app.get("/doctor_app", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/doctor_app.html"));
  });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

};