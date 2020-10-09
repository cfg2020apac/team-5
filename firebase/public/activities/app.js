async function init() {
    const db = firebase.firestore();
    documents = await db.collection("activities").get();
    documents.forEach(doc => {
        console.log(doc.data());
    });
}

init();
