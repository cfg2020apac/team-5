const functions = require("firebase-functions");
const admin = require("firebase-admin");

const ActivityHandler = {
    getAllActivities : async function() {
        const db = admin.firestore();
        const collRef = db.collection("activities");
        const r = await collRef.get();
        const data = [];
        r.forEach(doc => {
            const activity = doc.data();
            activity["id"] = doc.id;
            data.push(activity);
        });
        return data;
    },

    createActivity : function(userId, activity) {
        const db = admin.firestore();
        this.verifyAdmin(userId).then(result => {
            if (!result) {
                return;
            }
            console.log(activity);
            const doc = db.collection("activities").add(activity);
            console.log(doc.id);
        });
    },

    verifyAdmin : async function(userId) {
        const db = admin.firestore();
        doc = await db.collection("users").doc(userId).get();
        console.log(doc.data());
        if (doc.data().type == "Admin") {
            return true;
        } else {
            return false;
        }
    },

    editActivity : function(activityId, newActivity) {
        const db = admin.firestore();
        verifyAdmin(userId).then(result => {
            if (!result) {
                return
            }
            db.collection("activities").doc(activityId).update(newActivity);
        });
    },

    joinActivity : function(userId, activityId) {
        const db = admin.firestore();
        db.collection("activities").doc(activityId).get().then(doc => {
            if (doc.data().participants.includes(userId)) {
                throw "Already signed up";
            } else {
                db.collection("activities").doc(activityId).update({
                    participants : admin.firestore.FieldValue.arrayUnion(userId)
                });
            }
        });
    },

    leaveActivity: function(userId, activityId) {
        const db = admin.firestore();
        db.collection("activities").doc(activityId).update({
            participants : admin.firestore.FieldValue.arrayRemove(userId)
        });
    },

    getActivity : async function(activityId) {
        const db = admin.firestore();
        let doc = await db.collection("activities").doc(activityId).get();
        return doc.data();
    }
}

module.exports = ActivityHandler;
