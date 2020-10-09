activityId = "Zdb7Vtd9OvDwXwgqZBn4";
userId = "WdEP7GsDztjOTlUFhpaj";

window.onload = async(event) => {
    activity = await getActivity(activityId);
    let activityStatus = false;
    console.log(activity.participants);

    if (activity.participants.includes(userId)) {
        activityStatus = true;
        document.getElementById("sign-up-btn").classList.add("btn-danger");
        document.getElementById("sign-up-btn").innerHTML = "Unregister"
    }

    console.log(activity);
    document.getElementById("activity_image").src = activity.image;
    document.getElementById("activity_name").innerHTML = activity.name;
    document.getElementById("activity_startdate").innerHTML = activity.startBy;
    document.getElementById("activity_enddate").innerHTML = activity.endBy;
    document.getElementById("activity_location").innerHTML = activity.location;
    document.getElementById("activity_description").innerHTML = activity.description;
    var divContainer = document.getElementById("container-tags");
    for (i in activity.tags) {
        divContainer.append(activity.tags[i]);
    }
    document.getElementById("sign-up-btn").addEventListener("click", (e) => {
        if (activityStatus) {
            document.getElementById("sign-up-btn").classList.remove("btn-danger");
            document.getElementById("sign-up-btn").innerHTML = "Sign Up";
            leaveActivity(userId, activityId);
        } else {
            document.getElementById("sign-up-btn").classList.add("btn-danger");
            document.getElementById("sign-up-btn").innerHTML = "Unregister"
            joinActivity(userId, activityId);
        }
        activityStatus = !activityStatus;
    });
};
