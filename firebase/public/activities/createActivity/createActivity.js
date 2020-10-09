function displayRes() {
    
    document.innerHTML.getElementById("response") = "<li><ul>New Activity Added!</ul></li>";
}


function submitActivity() {

    var activity = {};
    activity.name = document.getElementById("activity_name").value;
    activity.startBy = document.getElementById("activity_startdate").value;
    activity.endBy = document.getElementById("activity_enddate").value;
    activity.description = document.getElementById("activity_description").value;
    activity.location = document.getElementById("activity_location").value;
    activity.tags = csvToArray(document.getElementById("activity_tags").value);
    activity.image = document.getElementById("activity_image").value;
    console.log("test");
    createActivity(userId, activity);
}
