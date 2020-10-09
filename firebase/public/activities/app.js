userId = "QnnMBwySsSyNQ1MsVfuR";

async function init() {
    const db = firebase.firestore();
    documents = await db.collection("activities").get();
    documents.forEach(doc => {
        console.log(doc.data());
    });
}

function createActivity(name, description, mediaArray, startTime, endTime, description, tags, location) {
    if (!verifyAdmin()) {
        return;
    }

    const activity = {
        name : name,
        description : description,
        startBy : startTime,
        endBy : endTime,
        createdBy : userId,
        mediaArray : mediaArray,
        tags : tags,
        location : location
    };

    console.log(activity);
    db.collection("activities").add(activity);
}

function verifyAdmin() {
    const db = firebase.firestore();
    db.collection("users").doc(userId).get().then((doc) => {
        console.log(doc.data());
        if (doc.data().type == "Admin") {
            return true;
        } else {
            return false;
        }
    });
}

function editActivity(activityId, newActivity) {
    const db = firebase.firestore();
    if (!verifyAdmin()) {
    }

    db.collection("activities").doc(activityId).update(newActivity);
}

editActivity("Zdb7Vtd9OvDwXwgqZBn4", {endBy:"itworks"});
