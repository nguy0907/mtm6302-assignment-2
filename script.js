
//data
const $title = document.getElementById('title')
const $name = document.getElementById('name')
const $container = document.getElementById('container')

$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'





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

$container.addEventListener('click', function (e){
  const $imageContainer = e.target.closest('.imageContainer')

 if ($imageContainer) {
  $imageContainer.classList.toggle('click')
}
  console.log(e.target.parentElement.children[1])
 })

