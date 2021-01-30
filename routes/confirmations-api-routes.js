var db = require("../models");

  module.exports = function(app) {
    // Find all Patients and return them to the user with res.json
    app.get("/api/confirmations", function(req, res) {
      db.Patients.findAll({where: {appointmentSet: true}}).then(function(dbPatients) {
        res.json(dbPatients);
      });
    });

};