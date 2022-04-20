const { initializeApp } = require('firebase/app');
const { getDatabase,ref,set } = require("firebase/database");

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



function postChildFoundInfo(childName, fatherName, gender, age, phoneNo, city) {
  set(ref(database, 'ChildFoundInfo/'), {
    childname: childName,
    childfathername: fatherName,
    childgender : gender,
    childage : age,
    phoneno : phoneNo,
    city : city
  });
}


// const db = firebase.database()
// const User = db.collection("Users")
// // const analytics = getAnalytics(app);


// module.exports = database;
module.exports= {postChildFoundInfo}