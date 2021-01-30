$(document).ready(function () {


    // Getting system Current data

    var today = new Date();

    var date = today.getFullYear() + (today.getMonth() + 1) + today.getDate();

    // Get the intial list of patients

    getPatients();

    //   display();
    function getPatients() {

        $.get("/api/doc-app/", function (data) {


            for (var i = 0; i < data.length; i++) {

                if (data[i].first_name &&  i < 10) {


                    $('#name' + i).append(data[i].first_name + ' ' + data[i].last_name);
                    $('#symptoms' + i).append('- Symptoms: ' + data[i].symptoms);
                    $('#painLevel' + i).append('- Pain Level: ' + data[i].pain_level);

                }
            }
            $("#btn1").click(function () {
                var myid = data[1].id;
                var appointmentSet = true;
                var updatedAt = date
                updateDatabase(myid, appointmentSet, updatedAt)
                getPatients();
            });
            $("#btn2").click(function () {
                var myid = data[2].id;
                var appointmentSet = true;
                var updatedAt = date
                updateDatabase(myid, appointmentSet, updatedAt)
                getPatients();
            });
            $("#btn3").click(function () {
                var myid = data[3].id;
                var appointmentSet = true;
                var updatedAt = date
                updateDatabase(myid, appointmentSet, updatedAt)
                getPatients();
            });
        });

        $.get("/api/doc-app/:appointmentset", function (data) {

            for (var i = 0; i < data.length; i++) {

                if (data[i].first_name && data[i].last_name && i < 10) {

                    $('#patientsSelected').append('<li id=' + data[i].id + ' style="list-style-type:none;font-size: 25px;">' +
                        data[i].first_name + ' ' + data[i].last_name +
                        '<div style="margin-top:5px;"></div>' +
                        '<div class="card" style="width: 18rem;">' +
                        '<div class="card-body">' +

                        '<div style="margin-left: 0px;"> - Symptoms: ' + data[i].symptoms + '</div>' +
                        '<div style="margin-left: 0px;"> - Paint Level: ' + data[i].pain_level + '</div>' +
                        '</div></div>' +
                        '</li>');

                }
            }

        });

    };

    function updateDatabase(myid, appointmentSet, updatedAt) {
    //    alert(myid + ' ' + appointmentSet + ' ' + updatedAt);
        var url = "api/doc-app/:id"
        var myData = { myid, appointmentSet, updatedAt };
        $.ajax({
            url: url,
            type: 'PUT',
            //   success: callback,
            data: { id: myid, appointmentSet: appointmentSet, updatedAt: updatedAt },
        });
        location.replace(location.href.split('#')[0]);
        


    }

})
