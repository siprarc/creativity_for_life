// Instructions for adding contnt
// Create two divs with ids for titleContent, and content
// buttons are there for content
// the onclick should call showContent with the type and category
// in content.js we need objects with content 
// for the categories (one for the titles, one for the content).
// update `contentObject` with the new category key and title and content objects

const showCommentContainer = (blogId) => {
	console.log ("FUN")
  return `
  <div class="blog_comments"
     	 data-blogid="comments_${blogId}"	>
	</div>
	<div class="comment_form"
		 data-blogid="${blogId}">
	</div>
  `  
}
//Show Content from Art work 
const titleContentForArtWork = {
    PencilArt: '<p><h3>Blog for Pencil & Charcoal Art</h3></p>',
    PastelArt: '<p><h3>Blog for Pastel Art</h3></p>',
    RangoliArt: '<p><h3>Blog for Rangoli Art</h3></p>',
    AcrylicOilPaintings: '<p><h3>Blog for Acrylic/Oil Paintings</h3></p>',
}
const contentForArtWork = {
    PencilArt: '<p>Content for Pencil & Charcoal Art</p>',
    PastelArt: '<p>Content for Pastel Art</p>',
    RangoliArt: '<p>Content for Rangoli Art</p>',
    AcrylicOilPaintings: '<p>Content for Acrylic/Oil Paintings</p>',
}
//Show Content from Food 
const titleContentForFood = {
    Indian: '<p><h3>Blog for Indian</h3></p>',
    EastAsian: '<p><h3>Blog for East Asian</h3></p>',
    Italian: '<p><h3>Blog for Italian</h3></p>',
    African: '<p>Blog for African</h3></p>',
}
const contentForFood = {
    Indian: '<p>Content for Indian</p>',
    EastAsian: '<p>Content for East Asian</p>',
    Italian: '<p>Content for Italian</p>',
    African: '<p>Content for African</p>',
}
//Show Content from Drinks 
const titleContentForDrinks = {
    Tea: '<p><h3>Blog for Tea</h3></p>',
    Coffee: '<p><h3>Blog for Coffee</h3></p>',
    Mocktails: '<p><h3>Blog for Mocktails</h3></p>',
    Smoothies: '<p>Blog for Smoothies</h3></p>',
}
const contentForDrinks = {
    Tea: '<p>Content for Tea</p>',
    Coffee: '<p>Content for Coffee</p>',
    Mocktails: '<p>Content for Mocktails</p>',
    Smoothies: '<p>Content for Smoothies</p>',
}

//Show Content from Photography 
const titleContentForPhotography = {
    NatureAndTravels: '<p><h3>Blog for Nature And Travels</h3></p>',
    celebrationsAndPeople: '<p><h3>Blog for Celebrations And People</h3></p>',
    stillLife: '<p><h3>Blog for Still Life</h3></p>',
    momentsAndReactions: '<p><h3>Blog for Moments And Reactions</h3></p>',
}
const contentForPhotography = {
	NatureAndTravels: '<p>Content for Nature And Travels</p>',
    celebrationsAndPeople: '<p>Content for Celebrations And People</p>',
    stillLife: '<p>Content for Still Life</p>',
    momentsAndReactions: '<p>Content for Moments And Reactions</p>',
}
//Show Content from Poetry 
const titleContentForPoetry = {
    Nature: '<p><h3>Blog for Nature poetry</h3></p>',
    myKitchen: '<p><h3>Blog for My Kitchen poetry</h3></p>',
    artThatSpeaks: '<p><h3>Blog for Art that speaks Poetry</h3></p>',
    LifeAndCelebrations: '<p><h3>Blog for Life and Celebrations Poetry</h3></p>',
}
const contentForPoetry = {
    Nature: `
    <div class="poetry_blog_photo_container">
	<div class="poetry_blog_photo_container_group">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1a.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1b.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1c.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1d.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1e.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1f.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1g.jpg">
	</div>
	<div class="poetry_blog_photo_container_group">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1a.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1b.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1c.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1d.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1e.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1f.jpg">
		<img class="poetry_blog_photos content-images" src="images/poetry-image1g.jpg">
	</div>
</div>
    <p>
		Silent flakes descend,<br>
		Blanket of white adorns earth,<br>
		Nature's hushed embrace.<br>
		And Sun's gentle caress,<br>
		Glistening snow in its embrace,<br>
		Nature's sparkling kiss.<br>
		Steam swirls above my noodle soup bowl,<br>
		Snowflakes dance, slurping the warmth within.<br>	
	</p>
	${showCommentContainer("blogId_nature_soup")} 
	`,


    myKitchen: '<p>Content for My Kitchen poetry</p>',
    artThatSpeaks: '<p>Content for Art that speaks Poetry</p>',
    LifeAndCelebrations: '<p>Content for Life and Celebrations Poetry</p>',
}

//Show Content from flora_and_fauna 
const titleContentForFloraAndFauna = {
    Roses: '<p><h3>Blog for Roses</h3></p>',
    Bulbs: '<p><h3>Blog for Bulbs</h3></p>',
    Herbs: '<p><h3>Blog for Herbs</h3></p>',
    Vegetables: '<p><h3>Blog for Vegetables</h3></p>',
	OtherAssortments: '<p><h3>Blog for Other Assortments</h3></p>',
}
const contentForFloraAndFauna = {
	Roses: '<p>Content for Roses</p>',
	Bulbs: '<p>Content for Bulbs</p>',
    Hebs: '<p>Content for Hebs</p>',
    Vegetables: '<p>Content for Vegetables</p>',
	OtherAssortments: '<p>Content for OtherAssortments</p>',
}
const contentObject = {
	art: {
		titleContentObj:titleContentForArtWork,
		contentObj:contentForArtWork,
	},
	food: {
		titleContentObj:titleContentForFood,
		contentObj:contentForFood,
	},
	drinks: {
		titleContentObj:titleContentForDrinks,
		contentObj:contentForDrinks,
	},
	photography: {
			titleContentObj:titleContentForPhotography,
			contentObj:contentForPhotography,
	},	
	poetry: {
		titleContentObj:titleContentForPoetry,
		contentObj:contentForPoetry,
	},
	floraAndFauna: {
		titleContentObj:titleContentForFloraAndFauna,
		contentObj:contentForFloraAndFauna,
	},
}



const showContent = (type, category) => {
    const titleContentObj=contentObject[category].titleContentObj
    const contentObj=contentObject[category].contentObj
  	
console.log(titleContentObj[type])
console.log(contentObj)			
document.getElementById('titleContent').innerHTML = titleContentObj[type]
document.getElementById('content').innerHTML = contentObj[type]
}