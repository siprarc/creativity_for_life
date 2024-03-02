//Show Content from Art work 
const contentForArtWork = {
    PencilArt: '<p>content for Pencil Art</p>',
    PastelArt: '<p>content for Pastel Art</p>',
    RangoliArt: '<p>content for Rangoli Art</p>',
    AcrylicOilPaintings: '<p>content for Acrylic/Oil Paintings</p>',
}
//Show Content from Poetry 
const contentForPoetry = {
    Nature: '<p>content for Nature</p>',
    myKitchen: '<p>content for My Kitchen</p>',
    artThatSpeaks: '<p>content for Art that speaks</p>',
    LifeAndCelebrations: '<p>content for Life and Celebrations</p>',
}
const showContent = (type, category) => {
    let contentObj={}
    if (category === 'art') {
        contentObj = contentForArtWork
    } else if  (category === 'poetry') {
        contentObj = contentForPoetry
    }


document.getElementById('content').innerHTML = contentObj[type]
}