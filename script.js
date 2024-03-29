
//data
const $title = document.getElementById('title')
const $name = document.getElementById('name')
const $container = document.getElementById('container')

//Adding text using text content
$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'


//Store all the image container

//Placeholder images from https://dummyimage.com/
$container.innerHTML = `
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
<div class='imageContainer'> <img class='picture' src="https://dummyimage.com/300.png/09f/fff"></div>
`

// This is where event delegation is used. It is connected to css as well to show what it does.

// Click event delegation
$container.addEventListener('click', function (e){
  const $imageContainer = e.target.closest('.imageContainer')

 if ($imageContainer) {
  $imageContainer.classList.toggle('click')
}

 })

// Here is the event delegation for mouseover when hovering over and out of the image container
 $container.addEventListener('mouseover', function (e){
  const $imageContainer = e.target.closest('.imageContainer')

 if ($imageContainer) {
  $imageContainer.classList.toggle('hoverin')
}
 })

 $container.addEventListener('mouseout', function (e){
  const $imageContainer = e.target.closest('.imageContainer')

 if ($imageContainer) {
  $imageContainer.classList.toggle('hoverout')
}

 })
