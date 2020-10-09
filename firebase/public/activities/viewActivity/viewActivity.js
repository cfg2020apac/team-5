window.onload = async(event) => {
    // console.log(activityId)
    let activityIdLoad = window.location.href.substr(window.location.href.indexOf("?") + 1)
    activity = await getActivity(activityIdLoad);
    let activityStatus = false;

    const isAdmin = await verifyAdmin(userId);
    if (isAdmin) {
        document.getElementById("edit").classList.remove("hidden");
        document.getElementById("sign-up-btn").classList.remove("btn-danger");
        document.getElementById("sign-up-btn").innerHTML = "View Participants";
    } else if (activity.participants.includes(userId)) {
        activityStatus = true;
        document.getElementById("sign-up-btn").classList.add("btn-danger");
        document.getElementById("sign-up-btn").innerHTML = "Unregister"
    }

    console.log(activity);
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
        if (isAdmin) {
            let currPath = window.location.href
            currPath = currPath.substr(0, currPath.lastIndexOf('/'))
            currPath = currPath.substr(0, currPath.lastIndexOf('/'))
            currPath = currPath + "/viewSignups/viewSignups.html?" + activityIdLoad
            window.location.replace(currPath);
        } else if (activityStatus) {
            document.getElementById("sign-up-btn").classList.remove("btn-danger");
            document.getElementById("sign-up-btn").innerHTML = "Sign Up";
            leaveActivity(userId, activityIdLoad);
        } else {
            document.getElementById("sign-up-btn").classList.add("btn-danger");
            document.getElementById("sign-up-btn").innerHTML = "Unregister"
            joinActivity(userId, activityIdLoad);
        }
        activityStatus = !activityStatus;
    });

    document.getElementById("edit").addEventListener("click", () => {
        location.href = "../editingActivity/editActivity.html?" + activities[i].id;
    });
};
