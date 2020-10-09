async function init() {
    const db = firebase.firestore();
    documents = await db.collection("activities").get();
    documents.forEach(doc => {
        console.log(doc.data());
    });
}

function createActivity(name, description, mediaArray, startTime, endTime, description, tags, location) {
    const db = firebase.firestore();

    let isAdmin;
    db.collection("users").doc(userId).get().then((doc) => {
        console.log(doc.data());
        if (doc.data().type == "Admin") {
            isAdmin = true;
        } else {
            isAdmin = false;
        }
    });

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

init();
