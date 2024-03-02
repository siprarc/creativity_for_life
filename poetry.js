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
console.log('poetry')



//Loop through an array of object//
const poetryCommentDiv = document.getElementById('poetry_comments')
const artWorkComments = [comment1,comment2,comment3]
console.log(poetryComments)
poetryComments.forEach(poetryComment => {
   console.log(poetryComment) 

//Create element for each comment
   const user_idContainer = document.createElement('p')
   const dateContainer = document.createElement('p')
   const commentContainer = document.createElement('p')

// add text to each element
   user_idContainer.innerHTML = poetryComment.user_id
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
   artWorkCommentDiv.appendChild(topCommentSection)

// adds each element to poetrycommentdiv
//artWorkCommentDiv.appendChild(user_idContainer)
//artWorkCommentDiv.appendChild(dateContainer)
   artWorkCommentDiv.appendChild(commentContainer)
   
})

