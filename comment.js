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


function addFormToScreen(documentId) {
    const element = document.getElementById("comment_form")
    element.innerHTML=`
    <div>
        <button>
            User Comments
        </button>   
    <form>
        <label for="user_comment">Comment:</label><br>
        <textarea id="user_comment" rows="4" cols="50"></textarea>
        <button onclick="myFunction()">Submit</button>  
      </form>
    </div>
    `
}
