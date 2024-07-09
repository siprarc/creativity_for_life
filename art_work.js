const comment1 = {
    user_id: 'Siprarc',
    date: '8/8/2023',
    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
}
const comment2 = {
    user_id: 'Bianca',
    date: '8/8/2023',
    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
}
const comment3 = {
    user_id: 'Anshur',
    date: '8/8/2023',
    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
}
console.log('art_work')

//Create a reference to html parent element
//const parentDiv = document.getElementById('art_work_comments')
// const dateContainer = document.createElement('p')
// const user_idContainer = document.createElement('p')
// const commentContainer = document.createElement('p')
// dateContainer.innerHTML = comment1.date
// user_idContainer.innerHTML =comment1.user_id
// comment.innerHTML =comment1.comment
// parentDiv.appendChild(dateContainer)
// parentDiv.appendChild(user_idContainer)
// parentDiv.appendChild(commentContainer)

//Loop through an array of object//
const artWorkCommentDiv = document.getElementById('art_work_comments')
const artWorkComments = [comment1,comment2,comment3]
console.log(artWorkComments)
artWorkComments.forEach(artWorkComment => {
   console.log(artWorkComment) 

//Create element for each comment
   const user_idContainer = document.createElement('p')
   const dateContainer = document.createElement('p')
   const commentContainer = document.createElement('p')

// add text to each element
   user_idContainer.innerHTML = artWorkComment.user_id
   dateContainer.innerHTML = artWorkComment.date
   commentContainer.innerHTML = artWorkComment.comment
   
//Create div syntax for 'username' and 'date'
   const topCommentSection = document.createElement('div')
   
//Add class to new div syntax
   topCommentSection.setAttribute("class","topCommentSection")

//Put Username and date in new div syntax
   topCommentSection.appendChild(user_idContainer)
   topCommentSection.appendChild(dateContainer)
//Put new div syntax into "artWorkCommentDiv"
   artWorkCommentDiv.appendChild(topCommentSection)

// adds each element to artworkcommentdiv
//artWorkCommentDiv.appendChild(user_idContainer)
//artWorkCommentDiv.appendChild(dateContainer)
   artWorkCommentDiv.appendChild(commentContainer)
   
})

