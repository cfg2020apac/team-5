userId = "QnnMBwySsSyNQ1MsVfuR";
activityId = "ttd4xPYNkmZShxuLKvL4";

async function getAllActivities() {
    const db = firebase.firestore();
    const collRef = db.collection("activities");
    const r = await collRef.get();
    const data = [];
    r.forEach(doc => {
        const activity = doc.data();
        activity["id"] = doc.id;
        data.push(activity);
    });
    return data;
}

function createActivity(userId, activity) {
    const db = firebase.firestore();
    verifyAdmin(userId).then(result => {
        if (!result) {
            return;
        }
        console.log(activity);
        const doc = db.collection("activities").add(activity);
        console.log(doc.id);
    });
}

async function verifyAdmin(userId) {
    const db = firebase.firestore();
    doc = await db.collection("users").doc(userId).get();
    console.log(doc.data());
    if (doc.data().type == "Admin") {
        return true;
    } else {
        return false;
    }
}

function editActivity(activityId, newActivity) {
    console.log(activityId);
    console.log(newActivity);
    const db = firebase.firestore();
    verifyAdmin(userId).then(result => {
        if (!result) {
            return
        }
        db.collection("activities").doc(activityId).update(newActivity);
    });
}

function joinActivity(userId, activityId) {
    const db = firebase.firestore();
    db.collection("activities").doc(activityId).get().then(doc => {
        if (doc.data().participants.includes(userId)) {
            throw "Already signed up";
        } else {
            db.collection("activities").doc(activityId).update({
                participants : firebase.firestore.FieldValue.arrayUnion(userId)
            });
        }
    });
}

function leaveActivity(userId, activityId) {
    const db = firebase.firestore();
    db.collection("activities").doc(activityId).update({
        participants : firebase.firestore.FieldValue.arrayRemove(userId)
    });
}

async function viewSignups(activityId) {
    const db = firebase.firestore();
    const peopleList = [];
    const doc = await db.collection("activities").doc(activityId).get();
    console.log(doc.data());
    console.log(doc.data().participants)

    for (const partId of doc.data().participants) {
        partData = await db.collection("users").doc(partId).get();
        console.log(partData.data())
        peopleList.push(partData.data());
    };
    return peopleList;
}

async function getActivity(activityId) {
    const db = firebase.firestore();
    let doc = await db.collection("activities").doc(activityId).get();
    return doc.data();
}

function delimitArray(list) {
    let string = "";
    list.forEach(tag => {
        string = tag + "," + string;
    });

    return string.substr(0, string.length-1);
}

function csvToArray(string) {
    return string.split(",");
}
