var db = require("../models");

module.exports = function (app) {
// Route for storing the patient information form the patient form into the patient database. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user submitted the form successfully, proceed back to the home page,
  // otherwise send back an error
  app.post("/api/patient_form", (req, res) => {
    db.Patients.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      symptoms: req.body.symptoms,
      address: req.body.address,
      appointment: req.body.appointment,
      email: req.body.email,
      phone_num: req.body.phone_num,
      pain_level: req.body.pain_level,
      age: req.body.age,
      gender: req.body.gender,
      appointmentSet: false
    })
      .then(() => {
        res.redirect(201, "/");
      })
      .catch(err => {
        console.log(err);
        res.status(401).json(err);
      });
  });
};