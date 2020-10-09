window.onload = async(event) => {
    // console.log(activityId)
    let activityId = window.location.href.substr(window.location.href.indexOf("?") + 1)
    activity = await getActivity(activityId);
    let activityStatus = false;

    if (activity.participants) {
        if (activity.participants.includes(userId)) {
            activityStatus = true;
            document.getElementById("sign-up-btn").classList.add("btn-danger");
            document.getElementById("sign-up-btn").innerHTML = "Unregister"
        }
    }

    console.log(activity);
    //document.getElementById("activity_image").src = activity.image;
    document.getElementById("activity_image").src = "https://picsum.photos/200/200";
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