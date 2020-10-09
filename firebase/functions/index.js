const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const { firebaseConfig } = require("firebase-functions");
const firebase = require("firebase/app");
const { auth } = require("firebase-admin");
require("firebase/auth");
require("firebase/firestore");
const fbConfig = {
  apiKey: "AIzaSyB_jkxL1W76KmMju0FdH8gT_SscHblxC8o",
  authDomain: "humanitech-65d8d.firebaseapp.com",
  databaseURL: "https://humanitech-65d8d.firebaseio.com",
  projectId: "humanitech-65d8d",
  storageBucket: "humanitech-65d8d.appspot.com",
  messagingSenderId: "30014619295",
  appId: "1:30014619295:web:b8515e27dd4f8faa6b2caa",
  measurementId: "G-NCEC9Y34PW"
};z
firebase.initializeApp(fbConfig);

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

const isEmpty = (string) => {
  if (string.trim() === '') return true;
  return false;
}

app.post("/register", function (req, res) {
  
  const {email, password, isAdmin} = req.body;
  let type = isAdmin ? "admin" : "volunteer";
  // TODO: validation

  firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
    // set the age? parse DOB and use currentYear - parsed year
    // isAdmin = true, set type = admin
    db.collection("users").doc(data.user.uid).set({
      ...req.body,
      "type": type
    })
    return res.status(200).json({message: `user ${data.user.uid} signed up successfully`});
  }).catch(err=> {
    return res.status(400).json({error:err.code});
  });
})

app.post('/login', (req, res) => {
  const {email, password} = req.body;

  // TODO: validation

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(data => {
    return data.user.getIdToken();
  })
  .then(token => {
    return res.json({token});
  })
  .catch(err => {
    console.error(err);
    return res.status(500).json({error: err.code});
  })
})

const FBAuth = (req, res, next) => {
  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1]; // parse token
  } else {
    return res.status(403).json({error: 'Unauthorized'});
  }

  // verify that token is issued by us
  admin.auth().verifyIdToken(idToken)
  .then(decodedToken => {
    req.user = decodedToken;
    console.log(decodedToken);
    //return db.collection('users').where('userId', '==', req.user.uid).limit(1).get();
    return next();
  })
  /*
  .then(data => {
    req.user.email = data.docs[0].data().email;
    return next();
  })
  */
  .catch(err => {
    console.error(err);
    return res.status(403).json(err);
  })
}
// post activity to test auth
app.post('/activity', FBAuth, (req, res) => {
  const newActivity = {
    name: req.body.name,
    created_by: req.user.email
  }

  db.collection('activities').add(newActivity)
  .then((doc) => {
    return res.json({message: `document ${doc.id} created successfully`});
  })
  .catch(err => {
    return res.status(500).json({error: err});
  })
})


require("./routes/user-reg")(app,db,firebase);
exports.api = functions.https.onRequest(app);
