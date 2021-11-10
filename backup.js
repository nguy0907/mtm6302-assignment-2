
//data
const $container = document.getElementById('container')
const $title = document.getElementById('title')
const $name = document.getElementById('name')
// const $imageContainer = document.getElementById('imageContainer')

$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'

// Code
const imageContainer = `<div id='imageContainer'>
 <img class='picture' src="https://picsum.photos/300/300?random=1">
 <p id='label'> Image 1 </p>
 </div>
 <div id='imageContainer'>
 <img class='picture' src="https://picsum.photos/300/300?random=1">
 <p id='label'> Image 2 </p>
 </div>
 <div id='imageContainer'>
 <img class='picture' src="https://picsum.photos/300/300?random=1">
 <p id='label'> Image 3 </p>
 </div>
 <div id='imageContainer'>
 <img class='picture' src="https://picsum.photos/300/300?random=1">
 <p id='label'> Image 4 </p>
 </div>
 <div id='imageContainer'>
 <img class='picture' src="https://picsum.photos/300/300?random=1">
 <p id='label'> Image 5 </p>
 </div>`

// const $picture = document.getElementsByClassName('picture')
// const selectimage = $container.children
 $container.insertAdjacentHTML('beforeend', imageContainer)

$container.parentElement.children[1].addEventListener('click', function (event){
  $container.parentElement.children[1].setAttribute('style', 
  `background-color:#D8E2DC; padding-top:3em;`)

  console.log(event.target.parentElement.children[1])
 })

 


 


 

