var activity = {
    "name": "Something",
    "createdBy": "asdklfja;skdjfu9841234",
    "image": "https://picsum.photos/200/200",
    "startBy": "12-2-2020",
    "endBy": "13-2-2020",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "mediaArray": ["asdfadf;", "asdfkasdflkj"],
    "tags": ["tag1", "tag2"],
    "location": "12 Ang Mo "
}

activityId = "Zdb7Vtd9OvDwXwgqZBn4";

window.onload = async(event) => {
    activity = await getActivity(activityId);
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
};

function signup() {
    joinActivity(userId, activityId);
}
