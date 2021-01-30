var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Find all Patients and return them to the user with res.json
  app.get("/api/doc-app/", function (req, res) {
    db.Patients.findAll({where: { appointmentSet: 0 }}).then(function (dbPatients) {
      res.json(dbPatients);
    });
  });

  app.get("/api/doc-app/:appointmentset", function (req, res) {
    db.Patients.findAll({ where: { appointmentSet: 1 } }).then(function (dbPatients) {
      res.json(dbPatients);
    });
  });

  app.put("/api/doc-app/:id", function (req, res) {
    db.Patients.update({ 
           appointmentSet: req.body.appointmentSet,
           updatedAt: req.body.updatedAt
         }, {
           where: {  
             id: req.body.id
           }
          }).then(function (dbPatients) {
        res.json(dbPatients);
      })
  });


};
