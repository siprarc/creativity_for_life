// console.log(comment.toString());

// function myFunction() {
//   document.getElementById("user_comment").value
// }
// const biancaObject = {
//     firstName: 'bianca',
//     lastName: 'dennis',
// }
// console.log(biancaObject.lastName)

// let user ="Sipra"
//     user = "Bianca"
//     user = "Anshu"
// console.log(user);

// let user = prompt('user_name');
// console.log('user_name')

// let user_comment = prompt('user_comment');
// console.log('user_comment')

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'
// Add Firebase products that you want to use
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';
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
const auth = getAuth();
let firebaseUser= {}
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    if (user !== firebaseUser){
        firebaseUser = user
    }
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function myFunction(blogId) {
    const elemt = document.getElementById(`user_comment_${blogId}`).value;
    const date = new Date();
    const formattedDate =  date.toISOString()
    console.log (elemt, formattedDate,firebaseUser.displayName)
}

const name = 'Sipra'

console.log('hi ' + name)
console.log(`hi ${name}`)
function addFormToScreen(documentId) {
    //Get all of the elements that have class "Comment form"//
    //Loop over each element of the Comment form//
    //Add form to each element//
    //Add submit button to multiple page and multiple blog//
    const elements = document.getElementsByClassName("comment_form")
    if(elements.length>0){
        Array.from(elements).forEach(function (element){
        const blogId = element.dataset.blogid
        const submitId = `Submit-${blogId}`
        console.log (blogId)   
        element.innerHTML=`
    <div>
        <button class="userComment-container">
            User Comments
        </button>   
    <form>
        <label for="user_comment">Comment:</label><br>
        <textarea id="user_comment_${blogId}" rows="4" cols="50"></textarea>
        <button id="${submitId}" >Submit</button> 
      </form>
    </div>
    `
    const submitButton = document.getElementById(submitId)
    submitButton.addEventListener("click", function () {
      myFunction(blogId)  
    })
        })
    }
    
}
addFormToScreen()
