var sample = [
    { name: "John Doe", image: "https://picsum.photos/200/200", joinedSince: "18-02-2020", numberOfActivitiesAttended: 50, attendanceRatio: 0.5 },
    { name: "Jackson Mah", image: "https://picsum.photos/200/200", joinedSince: "05-10-2019", numberOfActivitiesAttended: 10, attendanceRatio: 0.6 },
    { name: "Michael A", image: "https://picsum.photos/200/200", joinedSince: "07-08-2018", numberOfActivitiesAttended: 20, attendanceRatio: 0.9 },
    { name: "Michael B", image: "https://picsum.photos/200/200", joinedSince: "07-06-2020", numberOfActivitiesAttended: 16, attendanceRatio: 1.0 },
    { name: "Michael C", image: "https://picsum.photos/200/200", joinedSince: "07-09-2020", numberOfActivitiesAttended: 15, attendanceRatio: 0.3 },
    { name: "Michael D", image: "https://picsum.photos/200/200", joinedSince: "07-10-2018", numberOfActivitiesAttended: 28, attendanceRatio: 0.7 },
    { name: "Michael E", image: "https://picsum.photos/200/200", joinedSince: "07-02-2019", numberOfActivitiesAttended: 2, attendanceRatio: 0.2 }
];

userId = "QnnMBwySsSyNQ1MsVfuR";

async function renderList(userId, activityId) {
    persons = await viewSignups(activityId);
    console.log(persons);
    for (i = 0; i < persons.length; i++) {
        //document.write("<div class='card-body' style='text-align:center;'>");
        //document.write("<div class='card p-1' style='margin-top: 10px;text-align:center;'>");
        //document.write("<div class='d-flex flex-column'>");
        //document.write("<div style='display:flex; align-items: center; justify-content: center;'>");
        //document.write("<img id='activity_image' alt='no image found' src='" + "https://picsum.photos/200/200" + "' style='width: 120px; height: 120px; border-radius: 50%;' class='m-2'>");
        //document.write("</div>");
        //document.write("<div class='container'>");
        //document.write("<div class='row'>");
        //document.write("<div class='col-6'>");
        //document.write("<h5 class='header-text'>Name</h5>");
        //document.write("</div>");
        //document.write("<div class='col-6'>");
        //document.write("<h5 id='activity_name' class='value-text'>" + persons[i].name + "</h5>");
        //document.write("</div>");
        document.getElementById("part-list").innerHTML += '<tr><th scope="row">' + (i + 1) + '</th><td scope="row">' + persons[i].name  + '</td></tr>';
        //document.write("</div>");
        //document.write("<div class='row'>");
        //document.write("<div class='col-6'>");
        //document.write("<h5 class='header-text'>Joined Since</h5>");
        //document.write("</div>");
        //document.write("<div class='col-6'>");
        //document.write("<h5 class='value-text' id='activity_startdate'>" + sample[1].joinedSince + "</h5>");
        //document.write("</div>");
        //document.write("</div>");
        //document.write("<div class='row'>");
        //document.write("<div class='col-6'>");
        //document.write("<h5 class='header-text'>Number of Activities Attended</h5>");
        //document.write("</div>");
        //document.write("<div class='col-6'>");
        //document.write("<h5 class='value-text' id='activity_enddate'>" + sample[1].numberOfActivitiesAttended + "</h5>");
        //document.write("</div>");
        //document.write("</div>");
        //document.write("<div class='row'>");
        //document.write("<div class='col-6'>");
        //document.write("<h5 class='header-text'>Attendance Ratio</h5>");
        //document.write("</div>");
        //document.write("<div class='col-6'>");
        //document.write("<h5 class='value-text' id='activity_location'>" + sample[1].attendanceRatio + "</h5>");
        //document.write("</div>");
        //document.write("</div>");
        //document.write("</div>");
        //document.write("</div>");
        //document.write("</div>");
        //document.write("</div>");
    }
}

window.onload = async () => {
    await renderList(userId, "Zdb7Vtd9OvDwXwgqZBn4");
};
