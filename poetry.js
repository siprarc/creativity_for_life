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


const comment1 = {
    userName: 'Siprarc',
    date: '8/8/2023',
    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
}
const comment2 = {
   userName: 'Bianca',
    date: '8/8/2023',
    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
}
const comment3 = {
   userName: 'Anshurp',
    date: '8/8/2023',
    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
}
console.log('poetry')

// next steps (written by bianca)
// import everything you need from firebase
// use comment.js as a guide for what you need

//Loop through an array of object//
const poetryCommentDiv = document.getElementById('poetry_comments')
//const poetryComments = [comment1,comment2,comment3]
//Line 22 will be deleted and will be pulledd from Firebase
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

