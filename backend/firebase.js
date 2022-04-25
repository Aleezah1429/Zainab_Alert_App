const { initializeApp } = require('firebase/app');
const { getDatabase,ref,set,get,child } = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyD3m62S5hZsQbrLhSTkgv25ppDxMc1SINY",
  authDomain: "zainab-alert025.firebaseapp.com",
  projectId: "zainab-alert025",
  storageBucket: "zainab-alert025.appspot.com",
  messagingSenderId: "132517567612",
  appId: "1:132517567612:web:8ddb935903dc0e29abbdf9",
  measurementId: "G-WZZKN7TMF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
const databaseRef = ref(getDatabase()) 


function postChildFoundInfo(req,res) {
  set(ref(database, `ChildFoundInfo/${req.body.childName}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`), {
    childName: req.body.childName,
    fatherName: req.body.fatherName,
    gender : req.body.gender,
    age : req.body.age,
    phoneNo : req.body.phoneNo,
    city : req.body.city
  });
}

function getChildFoundInfo(req,res) {
  get(child(databaseRef, 'ChildFoundInfo')).then((snapshot) => {
    console.log("SNAP",snapshot.exists())
    if (snapshot.exists()) {
      res.send(snapshot.val())
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    res.send(error)
    console.error(error);
  });
}


// const db = firebase.database()
// const User = db.collection("Users")
// // const analytics = getAnalytics(app);


// module.exports = database;
module.exports= {postChildFoundInfo,getChildFoundInfo}