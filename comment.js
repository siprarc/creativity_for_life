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

function myFunction() {
    const elemt = document.getElementById("user_comment").value;
    const date = new Date();
    const formattedDate =  date.toISOString()
    console.log (elemt, formattedDate)
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
        <button id="${submitId}" onclick="myFunction()">Submit</button> 
      </form>
    </div>
    `
        })
    }


    
}
