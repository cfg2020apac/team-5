const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const {user} = require("firebase-functions/lib/providers/auth");
const ActivityHandler = require("./utils/ActivityHandler");

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).send("Hello World!");
});

app.post("/write-doc", async (req, res) => {
    const { collection, documentId, documentValue } = req.body;
    const docRef = db.collection(collection).doc(documentId);
    try {
        const r = await docRef.set(documentValue);
        console.log("Write Success", r);
        return res.status(200).end();
    } catch (e) {
        console.error("Write Failure", r);
        return res.status(500).end();
    }
});

app.get("/read-doc", async (req, res) => {
    const { collection, documentId } = req.query;
    const docRef = db.collection(collection).doc(documentId);
    try {
        const r = await docRef.get();
        console.log("Read Success", r);
        return res.status(200).send({
            name: r.id,
            value: r.data(),
        });
    } catch (e) {
        console.error("Read Failure", e);
        return res.status(500).end();
    }
});

app.get("/get-activity", async (req, res) => {
    collection = "activities";
    const { documentId } = req.query;
    const docRef = db.collection(collection).doc(documentId);
    try {
        const r = await docRef.get();
        console.log("Read Success", r);
        return res.status(200).send({
            name: r.id,
            value: r.data(),
        });
    } catch (e) {
        console.error("Read Failure", e);
        return res.status(500).end();
    }
});

app.get("/get-all-activities", async (req, res) => {
    try {
        const data = await ActivityHandler.getAllActivities();
        return res.status(200).send(data);
    } catch (e) {
        console.error("Read Failure", e);
        return res.status(500).end();
    }
});

app.post("/create-activity", async (req, res) => {
    const { userId, activity } = req.query;
    try {
        createActivity(userId, activity);
        console.log("Write Success");
        return res.status(200).end();
    } catch (e) {
        console.error("Read Failure", e);
        return res.status(500).end();
    }
});

app.post("/edit-activity", async (req, res) => {
    const { activityId, newActivity } = req.query;
    try {
        editActivity(activityId, newActivity);
        console.log("Write Success");
        return res.status(200).end();
    } catch (e) {
        console.error("Read Failure", e);
        return res.status(500).end();
    }
});

app.post("/join-activity", async (req, res) => {
    const { userId, activityId } = req.query;
    try {
        joinActivity(userId, activityId);
        console.log("Write Success");
        return res.status(200).end();
    } catch (e) {
        console.error("Read Failure", e);
        return res.status(500).end();
    }
});

app.post("/leave-activity", async (req, res) => {
    const { userId, activityId } = req.query;
    try {
        leaveActivity(userId, activityId);
        console.log("Write Success");
        return res.status(200).end();
    } catch (e) {
        console.error("Read Failure", e);
        return res.status(500).end();
    }
});


exports.api = functions.https.onRequest(app);
