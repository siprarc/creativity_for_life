//Show Content from Art work 
const titleContentForArtWork = {
    PencilArt: '<p>Blog for Pencil Art</p>',
    PastelArt: '<p>Blog for Pastel Art</p>',
    RangoliArt: '<p>Blog for Rangoli Art</p>',
    AcrylicOilPaintings: '<p>Blog for Acrylic/Oil Paintings</p>',
}
//Show Content from Poetry 
const titleContentForPoetry = {
    Nature: `
    <div class="poetry_blog_photo_container">
	<div class="poetry_blog_photo_container_group">
		<img class="poetry_blog_photos" src="images\poetry-image1a.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1b.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1c.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1d.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1e.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1f.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1g.jpg">
	</div>
	<div class="poetry_blog_photo_container_group">
		<img class="poetry_blog_photos" src="images\poetry-image1a.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1b.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1c.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1d.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1e.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1f.jpg">
		<img class="poetry_blog_photos" src="images\poetry-image1g.jpg">
	</div>
</div>
    <p>
		Silent flakes descend,❄️🌨️<br>
		Blanket of white adorns earth,<br>
		Nature's hushed embrace.<br>
		And Sun's gentle caress,<br>
		Glistening snow in its embrace,<br>
		Nature's sparkling kiss.😘<br>
		Steam swirls above my noodle soup bowl,<br>
		Snowflakes dance, slurping the warmth within.💕<br>	
	</p>
    `,
    myKitchen: '<p>Blog for My Kitchen poetry</p>',
    artThatSpeaks: '<p>Blog for Art that speaks Poetry</p>',
    LifeAndCelebrations: '<p>Blog for Life and Celebrations Poetry</p>',
}
const contentForPoetry = {
    Nature: '<p>Content for Nature Poetry</p>',
    myKitchen: '<p>Content for My Kitchen poetry</p>',
    artThatSpeaks: '<p>Content for Art that speaks Poetry</p>',
    LifeAndCelebrations: '<p>Content for Life and Celebrations Poetry</p>',
}
const showContent = (type, category) => {
    let titleContentObj={}
    let contentObj={}
    if (category === 'art') {
        titleContentObj = titleContentForArtWork
    } else if  (category === 'poetry') {
        titleContentObj = titleContentForPoetry
        contentObj = contentForPoetry
    }


document.getElementById('titleContent').innerHTML = titleContentObj[type]
document.getElementById('content').innerHTML = contentObj[type]
}