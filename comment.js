
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'
import { getFirestore, doc, getDoc, getDocs, collection, setDoc,addDoc, query, where } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js'
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
const db = getFirestore(app);
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

async function myFunction(blogId) {
  const textarea = document.getElementById(`user_comment_${blogId}`);
  const elemt = textarea.value;
  const date = new Date();
  const ISOformattedDate =  date.toISOString()
 
// Add a new document in collection "comment"
  await addDoc(collection(db, `comments_${blogId}`), {
  userName: firebaseUser.displayName,
  date: ISOformattedDate,
  comment: elemt,
  });
//Add code to clear text area

  textarea.value = '';
//Show comment to screen as soon as the user submit the comment form
showCommentToScreen()
}

export function addFormToScreen() {
//Get all of the elements that have class "Comment form"//
//Loop over each element of the Comment form//
//Add form to each element//
//Add submit button to multiple page and multiple blog//
  const elements = document.getElementsByClassName("comment_form")
  if(elements.length>0){
    Array.from(elements).forEach(function (element){
    const blogId = element.dataset.blogid
    const submitId = `Submit-${blogId}`
    const userCommentId =`userComment-${blogId}`
    const userCommentFormId = `userCommentForm-${blogId}`
    console.log (blogId)   
    element.innerHTML=`
    <div>
      <button id="${userCommentId}" class="userComment-container">User Comments</button>   
      <form id="${userCommentFormId}" class="comment-form">
        <label for="user_comment">Comment:</label><br>
        <textarea id="user_comment_${blogId}" rows="4" cols="50"></textarea>
        <button id="${submitId}" class="submit-container" >Submit</button> 
      
      </form>
    </div>
    `

//This makes the user comment form hidden//
document.getElementById(userCommentFormId).style.visibility= "hidden";

//Create event listner for the User Comment Button//
  const userCommentButton = document.getElementById(userCommentId)
  userCommentButton.addEventListener("click", function (event) {
  event.preventDefault()

//This where the code goes to showing the form
  document.getElementById(userCommentFormId).style.visibility= "visible";
})

//Create event listner for the Submit Button//
    const submitButton = document.getElementById(submitId)
    submitButton.addEventListener("click", function (event) {
      event.preventDefault()
      myFunction(blogId)  
    })
    })
  }
    
}
// Note from Bianca
// how do we make it so that this doesn't break if sipra
// adds a skeleton structure for this in her html files
export async function showCommentToScreen() {
  const elements = document.getElementsByClassName("blog_comments")
  if(elements.length>0){
    Array.from(elements).forEach(async function (element){
    element.innerHTML='' 
    const blogId = element.dataset.blogid
    const comments = []
  
    const querySnapshot = await getDocs(collection(db, blogId));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ", doc.data());
       comments.push(doc.data())
    });
    /*Sort the comment based on the date of the comment*/
    comments.sort((a, b) => new Date(b.date) - new Date(a.date));

    comments.forEach(comment => {
       console.log(comment.date)
//Formate ISO date to Normal date on the page (front-end) 
       const date = new Date(comment.date);
       
       const year = date.getFullYear();
       const month = date.getMonth() + 1; // JavaScript months are 0-indexed
       const day = date.getDate();
       
       const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
       
       //console.log(formattedDate); // Output: "2023-12-25"     
    //Create element for each comment
       const user_idContainer = document.createElement('p')
       const dateContainer = document.createElement('p')
       const commentContainer = document.createElement('p')
    
    // add text to each element
       user_idContainer.innerHTML = comment.userName
       dateContainer.innerHTML = formattedDate
       commentContainer.innerHTML = comment.comment
       
    //Create div syntax for 'username' and 'date'
       const topCommentSection = document.createElement('div')
       
    //Add class to new div syntax
       topCommentSection.setAttribute("class","topCommentSection")
    
    //Put Username and date in new div syntax
       topCommentSection.appendChild(user_idContainer)
       topCommentSection.appendChild(dateContainer)
    //Put new div syntax into "poetryCommentDiv"
      element.appendChild(topCommentSection)
    
    // adds each element to poetrycommentdiv
       element.appendChild(commentContainer)
       
    })
    })
    }

}

addFormToScreen()
//Add comments of users to show on the blog post//
showCommentToScreen()
