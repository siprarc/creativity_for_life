import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'

// Add Firebase products that you want to use
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'
  import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js'
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpdvnxHWnW3eBH8xyEHuv4zpcekNy84Lw",
  authDomain: "sipra-s-page.firebaseapp.com",
  projectId: "sipra-s-page",
  storageBucket: "sipra-s-page.appspot.com",
  messagingSenderId: "639310346557",
  appId: "1:639310346557:web:a22a5d48cba0e8e848ad54",
  measurementId: "G-LSCME9E44X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//Create a reference to db in firebase
const db = getFirestore(app);
//Need separate function that get info for email, password; Hint: Object destructuring 
const getUserInfo = (emailId, passwordId,userNameId) => {
  const email = document.getElementById(emailId).value
  const password = document.getElementById(passwordId).value 
let userName 
  if (userNameId) { 
    userName = document.getElementById(userNameId).value  
  }
  return({
    email,
    password,
    userName, 
  }) 
}
//Need separate function for error handling
//For Sign-up
const signUpUser = async() => {
  const {
    email,password,userName  
    } = getUserInfo("sign-up-email","sign-up-password","user_name")
    console.log(email, password)
//if username is not unique - Give a message to user saying the username exists
  const docRef = doc(db, "usernames",userName);
  const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
  //this is the code if the username exists in the db    
      console.log("Document data:", docSnap.data());
      alert("Username is already in use")
    } else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
// Signed up 
        updateProfile(auth.currentUser, {
        displayName: userName, 
        })
        .then(async() => {
        console.log("Profile Success"
        ) 
//Add username collection to firebase 
// Profile updated!
        await setDoc(doc(db, "usernames",userName), {});
      }).catch((error) => {
          console.log(error)
// An error occurred
          alert(error.message);
          console.log("Profile already exists in the database");
        });
          console.log("Success")
//This is where we make the call for User with User name
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          alert(errorMessage)
        })
  // docSnap.data() will be undefined in this case
          console.log("No such document!");
      }

  }
//For Sign-In
const signInUser = () => {
  const {
  email,password  
  } = getUserInfo("sign-in-email","sign-in-password")
//const emailSignIn = document.getElementById("sign-in-email").value
//const passwordSignIn = document.getElementById("sign-in-password").value
  console.log(email, password)
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed in 
    const user = userCredential.user;
    console.log("Success")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });	
}
//Create Event listner for Sign-up and Sign-in
let buttonConfigs = [
  {
  id:"sign-up",
  func:signUpUser,
  },
  {
  id:"sign-in",
  func:signInUser,
  },
];
//Using for Each signing functions with a loop
buttonConfigs.forEach(config => document.getElementById(config.id).addEventListener("click",config.func));
  


