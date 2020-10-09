function saveActivity() {
    const activity = {};
    activity.name = document.getElementById("activity_name").value;
    activity.startBy = document.getElementById("activity_startdate").value;
    activity.endBy = document.getElementById("activity_enddate").value;
    activity.description = document.getElementById("activity_description").value;
    activity.location = document.getElementById("activity_location").value;
    activity.tags = csvToArray(document.getElementById("activity_tags").value);
    activity.image = document.getElementById("activity_image").value;
    console.log(activity);
    editActivity(activityId, activity);
}


window.onload = async(event) => {
    activity = await getActivity(activityId);
    console.log(activity);
    document.getElementById("activity_name").value = activity.name;
    document.getElementById("activity_startdate").value = activity.startBy;
    document.getElementById("activity_enddate").value = activity.endBy;
    document.getElementById("activity_description").value = activity.description;
    document.getElementById("activity_location").value = activity.location;
    document.getElementById("activity_tags").value = delimitArray(activity.tags);
    document.getElementById("activity_image").value = activity.image;
};
