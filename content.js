//Show Content from Art work 
const contentForArtWork = {
    PencilArt: '<p>Blog for Pencil Art</p>',
    PastelArt: '<p>Blog for Pastel Art</p>',
    RangoliArt: '<p>Blog for Rangoli Art</p>',
    AcrylicOilPaintings: '<p>Blog for Acrylic/Oil Paintings</p>',
}
//Show Content from Poetry 
const contentForPoetry = {
    Nature: '<p>Blog for Nature Poetry</p>',
    myKitchen: '<p>Blog for My Kitchen poetry</p>',
    artThatSpeaks: '<p>Blog for Art that speaks Poetry</p>',
    LifeAndCelebrations: '<p>Blog for Life and Celebrations Poetry</p>',
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