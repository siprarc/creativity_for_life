// Instructions for adding contnt
// Create two divs with ids for titleContent, and content
// buttons are there for content
// the onclick should call showContent with the type and category
// in content.js we need objects with content 
// for the categories (one for the titles, one for the content).
// update `contentObject` with the new category key and title and content objects

import { addFormToScreen, showCommentToScreen } from "./comment.js"
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
    PencilAndCharcoalArt: '<p><h3>Blog for Pencil & Charcoal Art</h3></p>',
    PastelArt: '<p><h3>Blog for Pastel Art</h3></p>',
    RangoliArt: '<p><h3>Blog for Rangoli & Jhoti Art</h3></p>',
    AcrylicOilPaintings: '<p><h3>Blog for Acrylic/Oil Paintings</h3></p>',
}
const contentForArtWork = {
    PencilAndCharcoalArt: '<p>Content for Pencil & Charcoal Art</p>',
    
	PastelArt: `
	<div class="pastel_art_photo_container">
		<img class="pastel_art_blog_photos content-images" src="images/Pastel_art_images/P-Landscape1.jpg">
	</div>
	<div>
    	<p>Pastel art is a versatile and expressive medium that involves using powdered pigment 
		sticks to create vibrant, textured artwork. I have basically used three techniques 
		here - layering, blending and scumbling.
		</p>
		${showCommentContainer("blogId_pastel_art_landscape1")} 
	`,

    RangoliArt: `
	<div class="rangoli_blog_photo_container">
	<div class="rangoli_blog_photo_container_group">
		<img class="rangoli_blog_photos content-images" src="images/Rangoli_Chita_art_images/IMG_0534.JPG">
		<img class="rangoli_blog_photos content-images" src="images/Rangoli_Chita_art_images/IMG_0535.JPG">	
	</div>
	<div>
    	<p>This traditional art form of Odisha is called Joti Chita which is designed on 
		the walls or on floors from rice paste. People use their fingers as brush to make thsese
		during festive and auspicious occasions. It is quite unque from Rangoli. You will find 
		these commonly on the front doors of Odiya houses during the "Margashira" month 
		(Hindu lunar calendar) which falls in November or December. Floral designs and small 
		foot mark ofGodess Lakshmi are designed as chita to welcome Godess Lakshmi.
		</p>
		${showCommentContainer("blogId_rangoli_chitt1and2")} 
	`,
    AcrylicOilPaintings: '<p>Content for Acrylic/Oil Paintings</p>',
}
//Show Content from Food 
const titleContentForFood = {
    Indian: '<p><h3>Blog for Indian</h3></p>',
    EastAsian: '<p><h3>Blog for East Asian</h3></p>',
    Italian: '<p><h3>Blog for Italian</h3></p>',
    African: '<p><h3>Blog for African</h3></p>',
	SouthAmerican: '<p><h3>Blog for South American</h3></p>',
}
const contentForFood = {
	//Move the above Indian food content here from the title section
    Indian: `
	<div class="indian_food_photo_container1">
		<img class="indian_food_blog_photos content-images" src="images/Food_blog_images/South_Indian_tiffin.jpg">
	</div>
	<div>
    	<p>South Indian tiffin refers to a variety of light, flavorful, and healthy breakfast or snack
			 dishes commonly enjoyed in South India. These dishes are typically made with rice, lentils, 
			 and spices, often served with chutneys and sambar. Popular South Indian tiffin items include
			 Iddli, Dosa (Indian creepe'), Vada (savory fried donout hole), Upma, Pongal rice.
		</p>
		${showCommentContainer("blogId_Indian_food_tiffin1")} 
	`,

    EastAsian: `
	<div class="indian_food_photo_container2">
		<img class="indian_food_blog_photos content-images" src="images/Food_blog_images/Kimchi_rice.jpg">
	</div>
	<div>
    	<p>Kimchi Rice (Kimchi Bokkeumbap) is a flavorful Korean fried rice dish made by 
		stir-frying cooked rice with aged kimchi, vegetables, and sometimes protein like 
		egg, tofu, or meat. It is a quick, easy, and delicious way to use leftover rice 
		and kimchi.
		To elaborate more, Kimchi is a traditional Korean fermented vegetable dish, 
		typically made with napa cabbage and radish, seasoned with chili powder, garlic, 
		ginger, scallions, and salted seafood (like fish sauce or shrimp paste). 
		It undergoes fermentation, which enhances its tangy, spicy, and umami-rich 
		flavor while also boosting its probiotic content. 
		Kimchi is an essential part of Korean cuisine, known for its bold taste and 
		numerous health benefits. It uis rich in Probiotics which help in supporting 
		gut health and digestion. It is rich in vitamins A, C, and antioxidants which 
		helps to boosts immunity. It also aids metabolism as it is rich in capsaicin.
		It is also known to supports heart health by helping lower cholesterol and 
		inflammation. Kimchi is used to make various dishes like kimchi rice, stews, 
		and pancakes.
		</p>
		${showCommentContainer("blogId_Kimchi_rice2")} 
	`,

    Italian: '<p>Content for Italian</p>',
    African: '<p>Content for African</p>',
	SouthAmerican: '<p>Content for SouthAmerican</p>',
}
//Show Content from Drinks 
const titleContentForDrinks = {
    Tea: '<p><h3>Blog for Tea</h3></p>',
    Coffee: '<p><h3>Blog for Coffee</h3></p>',
    Mocktails: '<p><h3>Blog for Mocktails</h3></p>',
    Smoothies: '<p><h3>Blog for Smoothies</h3></p>',
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
	NatureAndTravels: `
	<div class="NatureAndTravels_blog_photo_container">
	<div class="NatureAndTravels_blog_photo_container_group">
		<img class="NatureAndTravels_blog_photos content-images" src="images/Photography_blog_images/Sunny_lighthouse1.JPG">
		<img class="NatureAndTravels_blog_photos content-images" src="images/Photography_blog_images/Sunny_lighthouse2.JPG">
		<img class="NatureAndTravels_blog_photos content-images" src="images/Photography_blog_images/Sunny_lighthouse3.JPG">
	</div>
	<div>
    	<p>The coast of Maine is dotted with 65 lighthouses. I visited one of these picturesque landmarks to appreciate 
		both the history and beauty of Maine's Atlantic coast. Maine's oldest lighthouse, is located in Cape Elizabeth, 
		and is a popular spot for photos and is often visited. 
		</p>
		${showCommentContainer("blogId_NatureAndTravels_Lighthouse_Sunny")} 
	
	<div class="NatureAndTravels_blog_photo_container2">
	<div class="NatureAndTravels_blog_photo_container_group">
		<img class="NatureAndTravels_blog_photos content-images" src="images/Photography_blog_images/Cloudy_lighthouse1.JPG">
		<img class="NatureAndTravels_blog_photos content-images" src="images/Photography_blog_images/Cloudy-Stormy_lighthouse2.JPG">
	</div>
	<div>
    	<p>The lighthouse is located by an interesting rock formation that looks like petrified wood. 
		However, it's made of alternating layers of quartzite and dark grey phyllite. During storms,
		the waves crash over the top of its lantern room. About 10 miles out, and visible only on a clear day, is the Halfway 
		Rock Light Station, which was first lit in 1871 and is located halfway between Cape Elizabeth and Cape Small. 
		</p>
		${showCommentContainer("blogId_NatureAndTravels_Lighthouse_Stormy")} 
	`,
	
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
addFormToScreen()
//Add comments of users to show on the blog post//
showCommentToScreen()
}
window.showContent = showContent
