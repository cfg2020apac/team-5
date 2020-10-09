function editActivity() {
    var activity = {};
    activity.name = document.getElementById("activity_name").value;
    activity.startBy = document.getElementById("activity_startdate").value;
    activity.endBy = document.getElementById("activity_enddate").value;
    activity.description = document.getElementById("activity_description").value;
    activity.location = document.getElementById("activity_location").value;
    activity.tags = document.getElementById("activity_tags").value;
    activity.image = document.getElementById("activity_image").value;

    editActivity(userId, activity);

    console.log(activity);
}

activityId = "Zdb7Vtd9OvDwXwgqZBn4";

window.onload = async(event) => {
    activity = await getActivity(activityId);
    console.log(activity);
    document.getElementById("activity_name").value = activity.name;
    document.getElementById("activity_startdate").value = activity.startBy;
    document.getElementById("activity_enddate").value = activity.endBy;
    document.getElementById("activity_description").value = activity.description;
    document.getElementById("activity_location").value = activity.location;
    document.getElementById("activity_tags").value = activity.tags[0];
    document.getElementById("activity_image").value = activity.image;
};