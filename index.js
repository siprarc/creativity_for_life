import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'

// Add Firebase products that you want to use
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'
  import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js'

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
const signUpUser = () => {
const {
email,password,userName  
} = getUserInfo("sign-up-email","sign-up-password","user_name")

//const emailSignUp = document.getElementById("sign-up-email").value
//const passwordSignUp = document.getElementById("sign-up-password").value
console.log(email, password)
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {

// Signed up 
updateProfile(auth.currentUser, {
displayName: userName, 
}).then(() => {
console.log("Profile Success"
)  
// Profile updated!
// ...
}).catch((error) => {
console.log(error)
// An error occurred
// ...
});
  console.log("Success")
//This is where we make the call for User with User name
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage)
})
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
//document.getElementById("sign-up").addEventListener("click",signUpUser)
//document.getElementById("sign-in").addEventListener("click",signInUser)

//Manage Users who are currently signed-in
//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'
//import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js'

// const auth = getAuth(firebaseConfig);
// onAuthStateChanged(auth, (getUserInfo) => {
//   if (getUserInfo) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const emailId = getUserInfo.emailIid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// const auth = getAuth(firebaseConfig);
// const getUserInfo = auth.currentUser;

// if (getUserInfo) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/auth.user
//   // ...
// } else {
//   // No user is signed in.
// }
// });

