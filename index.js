import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'

// Add Firebase products that you want to use
  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, setPersistence, browserLocalPersistence} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'
  import { getFirestore, doc, getDoc, getDocs, collection, setDoc,addDoc, query, where } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js'
 
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
let firebaseUser= {}
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user', user)
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    firebaseUser = user
    console.log(user, firebaseUser, user !== firebaseUser)
    console.log('in auth')
    console.log('done auth')
    let div1 = document.createElement("div");
    console.log('username', firebaseUser)
    const welcomeEle = !!firebaseUser.displayName ? `<p>Welcome, ${firebaseUser.displayName}!</p>` : `<span></span>`
    document.getElementById('welcomeEle').innerHTML = welcomeEle  
  
  } else {
  // Redirect to login if no username
    firebaseUser={ }
  }
});
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
  console.log(email)
  setPersistence(auth,browserLocalPersistence)
  .then(() => {
// Signed in 
  return signInWithEmailAndPassword(auth, email, password)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });	
}
//Sign Out
const signOutUser = async() => {
  console.log('signout')
  signOut(auth).then(() => {
    // Sign-out successful.
      console.log ('Success')
      document.getElementById('welcomeEle').innerHTML =''  
      alert("You are now signed-out!");
        }).catch((error) => {
    // An error happened.
      console.log('error occureded')
      });
}

const displayNavbar = ()=>{
// create a the nav html in your javascript store in variable
let div = document.createElement("div");
const navigation = `
<div id="welcomeEle" class="welcomeEle">     
</div>

<div class="navbar">
	<div class="dropdown">
    <button class="dropbtn">Log In
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="log_in.html">Sign-In</a>
    <button id="sign-out"
            class="dropbtn">Sign-Out
      <i class="fa fa-caret-down"></i>
    </button>
  </div>
</div>
<a href="index.html#contact_id">Contact</a>
  <div class="dropdown">
    <button class="dropbtn">My Blog Post
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="art_work.html">Art work</a>
      <a href="food_and_drinks.html">Food and Drinks</a>
      <a href="photography.html">Photography</a>
      <a href="poetry.html">Poetry</a>
      <a href="flora_and_fauna.html">Flora and Fauna</a>
    </div>
  </div>
<a href="About me.html">About me</a>
<a href="index.html">Home</a>
</div>`
div.innerHTML = navigation

// prepend nav bar to body
const element = document.querySelector("body");
element.prepend(div);
}
console.log('initial render')
displayNavbar()  
let div = document.createElement("welcomeEle");
console.log('username', firebaseUser)
console.log('after initial render')

//Create Event listner for Sign-up, Sign-in and Sign-out
let buttonConfigs = [
  {
  id:"sign-up",
  func:signUpUser,
  },
  {
  id:"sign-in",
  func:signInUser,
  },
  {
  id:"sign-out",
  func: signOutUser,
    },
];

//Using for Each signing functions with a loop
buttonConfigs.forEach(config => !!document.getElementById(config.id)  && document.getElementById(config.id).addEventListener("click",config.func));
//Get all blogs in a collection
const getDocsFromCollection = async (collectionName) => { 
  const documents = []
  const q = query (collection(db, blog_comments),  where (blogId,"==", ));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  documents.push(doc.data())
})
return documents
};

//add the log_in.css file to every page using the index.js file
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'index.css';
document.head.appendChild(link)