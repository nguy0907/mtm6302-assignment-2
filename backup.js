
//data

const $title = document.getElementById('title')
const $name = document.getElementById('name')


$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'



const $container = document.getElementById('container')


$container.addEventListener('click', function (e){
  const $imageContainer = e.target.closest('.imageContainer')

 if ($imageContainer) {
  $imageContainer.classList.toggle('effect')
}
  console.log(e.target.parentElement.children[1])
 })





