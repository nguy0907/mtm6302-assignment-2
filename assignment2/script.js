const $title = document.getElementById('title')
const $name = document.getElementById('name')
const $container = document.getElementById('container')
const $imageContainer = document.getElementById('imageContainer')
const $picture = document.getElementById('picture')
const $picText = document.getElementById('picText')
const $element = document.getElementById('element')

$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'

const imgArray = [
    'Image 1',
    'Image 2',
    'Image 3',
    'Image 4',
    'Image 5',
    'Image 6',
    'Image 7',
    'Image 8',
    'Image 9',
    'Image 10',
    'Image 11',
    'Image 12'
]

const img = [
    `<img src="https://picsum.photos/300/300?random=1" ${imgArray[0]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[1]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[2]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[3]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[4]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[5]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[6]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[7]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[8]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[9]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[10]}>
    <img src="https://picsum.photos/300/300?random=1" ${imgArray[11]}>`
]
$container.innerHTML = img
$picture.addEventListener('click', function (){

})



// for (let picNumber = 0; picNumber < 11; picNumber++) {
//     $imageContainer.innerHTML += `<div id='imageContainer'>
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     </div>`

   
// }


