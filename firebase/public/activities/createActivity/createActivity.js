var activity = {
    "name": "aaaaaaaa",
    "createdBy": "aaaaaaaa",
    "image": "aaaaaaaa",
    "startBy": "aaaaaaaa",
    "endBy": "aaaaaaaa",
    "description": "aaaaaaaa",
    "mediaArray": ["aaaaaaaa", "aaaaaaaa"],
    "tags": ["aaaaaaaa", "aaaaaaaa"],
    "location": "aaaaaaaa"
}

function submitActivity() {
    activity.name = document.getElementById("activity_name").value;
    activity.startBy = document.getElementById("activity_startdate").value;
    activity.endBy = document.getElementById("activity_enddate").value;
    activity.description = document.getElementById("activity_description").value;
    activity.location = document.getElementById("activity_location").value;
    activity.tags = document.getElementById("activity_tags").value;
    activity.image = document.getElementById("activity_image").value;

    console.log(activity);
}