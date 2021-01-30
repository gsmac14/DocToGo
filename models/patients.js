module.exports = function (sequelize, DataTypes) {
    var Patients = sequelize.define("Patients", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        symptoms: DataTypes.STRING,
        address: DataTypes.STRING,
        appointment: DataTypes.DATE,
        email: DataTypes.STRING,
        phone_num: DataTypes.INTEGER ,
        doctor_id: DataTypes.INTEGER ,
        pain_level: DataTypes.INTEGER ,
        age: DataTypes.INTEGER ,
        gender: DataTypes.INTEGER,
        appointmentSet: DataTypes.BOOLEAN
    });

    return Patients;
};