userId = "QnnMBwySsSyNQ1MsVfuR";

async function init() {
    const db = firebase.firestore();
    documents = await db.collection("activities").get();
    documents.forEach(doc => {
        console.log(doc.data());
    });
}

function createActivity(userId, name, description, mediaArray, startTime, endTime, description, tags, location) {
    if (!verifyAdmin(userId)) {
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

function verifyAdmin(userId) {
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
    if (!verifyAdmin(userId)) {
        return
    }

    db.collection("activities").doc(activityId).update(newActivity);
}

function joinActivity(userId, activityId) {
    const db = firebase.firestore();
    //if (verifyAdmin(userId)) {
        //return
    //}
    db.collection("activities").doc(activityId).update({
        participants : firebase.firestore.FieldValue.arrayUnion(userId)
    });
}

function LeaveActivity() {
}

async function getActivity(activityId) {
    const db = firebase.firestore();
    let doc = await db.collection("activities").doc(activityId).get();
    return doc.data();
}

joinActivity(userId, "v9LfMexlDZCkYrtYOU4o");
