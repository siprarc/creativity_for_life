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