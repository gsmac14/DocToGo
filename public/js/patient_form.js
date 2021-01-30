$(document).ready(() => {
    // Getting references to our form and input
    const patientForm = $("form#patient_form");
    const firstName = $("input#first_name");
    const lastName = $("input#last_name");
    const age = $("input#age");
    const gender = $("select#gender");
    const symptoms = $("textarea#symptoms");
    const address= $("input#address");
    const painLevel = $("select#pain_level");
    const appointment = $("input#appointment");
    const email = $("input#email");
    const phoneNum = $("input#phone_num");
    // When the submit button is clicked, we validate all our inputs
    patientForm.on("submit", event => {
      console.log('test-js');
    event.preventDefault();
      const patientData = {
        firstName: firstName.val().trim(),
        lastName: lastName.val().trim(),
        age: age.val().trim(),
        gender: gender.val(),
        symptoms: symptoms.val(),
        address: address.val().trim(),
        painLevel: painLevel.val(),
        appointment: new Date(appointment.val().trim()),
        email: email.val().trim(),
        phoneNum: phoneNum.val().trim()
      };
      if (!patientData.firstName || !patientData.lastName || !patientData.age || !patientData.gender || !patientData.symptoms || !patientData.address || !patientData.painLevel || !patientData.appointment || !patientData.email || !patientData.phoneNum) {
        return;
      }
      // If we have all our inputs,it will run the storePatientInfo function
      storePatientInfo(patientData.firstName, patientData.lastName, patientData.age, patientData.gender, patientData.symptoms, patientData.address, patientData.painLevel, patientData.appointment, patientData.email, patientData.phoneNum);
      firstName.val("");
      lastName.val("");
      age.val("");
      gender.val("");
      symptoms.val("");
      address.val("");
      painLevel.val("");
      appointment.val("");
      email.val("");
      phoneNum.val("");
    });
    // Does a post to the signup route. If successful, we are redirected to the home page
    // Otherwise we log any errors
    function storePatientInfo(firstName,lastName, age, gender, symptoms, address,painLevel, appointment, email, phoneNum) {
      $.post("/api/patient_form", {
        first_name: firstName,
        last_name: lastName,
        age: age,
        gender: gender,
        symptoms: symptoms,
        address: address,
        pain_level: painLevel,
        appointment: appointment,
        email: email,
        phone_num: phoneNum
      })
        .done(() => {
          window.location.replace("/");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });