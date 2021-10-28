const $container = document.getElementById('container')
const $title = document.getElementById('title')
const $name = document.getElementById('name')
const $imageContainer = document.getElementById('imageContainer')
const $picture = document.getElementById('picture')
const $picText = document.getElementById('picText')


$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'


$picture.addEventListener('click', function (event){
$picText.textContent = 'This is an image'
})

for (let picNumber = 0; picNumber < 12; picNumber++) {
$container.innerHTML += `<div id='container'>
                        <img id='picture' src="https://picsum.photos/300/300?random=1">
                        <p id='picText'></p> </div>`
}