const $title = document.getElementById('title')
const $name = document.getElementById('name')
const $container = document.getElementById('container')
const $imageContainer = document.getElementById('imageContainer')
const $picture = document.getElementById('picture')
const $picText = document.getElementById('picText')


$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'



$picture.addEventListener('click', function (){
$picText.innerHTML = 'This is an image'
})

$container.addEventListener('dblclick', function (){
    $picText.innerHTML = ''
    })

for (let picNumber = 0; picNumber < 11; picNumber++) {
    // $imageContainer.innerHTML += `<div id='imageContainer'>
    // <img id='picture' src="https://picsum.photos/300/300?random=1">
    // </div>`
}

