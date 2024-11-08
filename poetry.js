// notes from bianca
// Now we need to move the logic we have here into comment.js so that we can display comments from any post
// to do that. comment.js will need to grab a blog id from a div in the html (just like in comment.html)
// then it will need to create elements for the comments(already done here)
// and add them to the page (also done here)
// we need to make this reusuable so that it will work with any blog post or content
// Basically, anywhere you are using a poetry-specific string, you need to make this reusueable

//notes from bianca again
// do we need to move all of the firebase imports? Does comment.js already have some of this?

import { collection, getDocs, getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'
const firebaseConfig = {
   apiKey: "AIzaSyCpdvnxHWnW3eBH8xyEHuv4zpcekNy84Lw",
   authDomain: "sipra-s-page.firebaseapp.com",
   projectId: "sipra-s-page",
   storageBucket: "sipra-s-page.appspot.com",
   messagingSenderId: "639310346557",
   appId: "1:639310346557:web:a22a5d48cba0e8e848ad54",
   measurementId: "G-LSCME9E44X"
 };
const app = initializeApp(firebaseConfig);
//const auth = getAuth();
const db = getFirestore(app);

// next steps (written by bianca)
// import everything you need from firebase
// use comment.js as a guide for what you need

//Loop through an array of object//
// notes from bianca
// this is how we get the element that we are adding the comments to. This should be resusualbe
// cannot use id for this. You need to use classnames (just like in comment.js)
const poetryCommentDiv = document.getElementById('poetry_comments') 
const poetryComments = []


const querySnapshot = await getDocs(collection(db, "comments_blog1"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
   console.log(doc.id, " => ", doc.data());
   poetryComments.push(doc.data())
});

poetryComments.forEach(poetryComment => {
   console.log(poetryComment)   
//Create element for each comment
   const user_idContainer = document.createElement('p')
   const dateContainer = document.createElement('p')
   const commentContainer = document.createElement('p')

// add text to each element
   user_idContainer.innerHTML = poetryComment.userName
   dateContainer.innerHTML = poetryComment.date
   commentContainer.innerHTML = poetryComment.comment
   
//Create div syntax for 'username' and 'date'
   const topCommentSection = document.createElement('div')
   
//Add class to new div syntax
   topCommentSection.setAttribute("class","topCommentSection")

//Put Username and date in new div syntax
   topCommentSection.appendChild(user_idContainer)
   topCommentSection.appendChild(dateContainer)
//Put new div syntax into "poetryCommentDiv"
   poetryCommentDiv.appendChild(topCommentSection)

// adds each element to poetrycommentdiv
   poetryCommentDiv.appendChild(commentContainer)
   
})

