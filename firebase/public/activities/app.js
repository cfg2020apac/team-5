userId = "QnnMBwySsSyNQ1MsVfuR";

async function init() {
    const db = firebase.firestore();
    documents = await db.collection("activities").get();
    documents.forEach(doc => {
        console.log(doc.data());
    });
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
