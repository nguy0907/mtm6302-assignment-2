const $container = document.getElementById('container')
const $title = document.getElementById('title')
const $name = document.getElementById('name')
// const $imageContainer = document.getElementById('imageContainer')
const $popuptext = document.getElementById('popuptext')



$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'

// const imgLabel = [
//     {
//         images: 'Monday',
//     label: 'Image',
//     }
// ]   
   
const imgLabel = [
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
const newElement = []
// const img = [
//     `<img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">
//     <img id='picture' src="https://picsum.photos/300/300?random=1">`
// ]

const imageContainer = `<div id='imageContainer'>
 <img class='picture' src="https://picsum.photos/300/300?random=1">
 </div>`



for (let picNumber = 0; picNumber < 12; picNumber++) {
  $container.insertAdjacentHTML('beforeend', imageContainer)
}
$container.addEventListener('click', function (event){
    $container.children[0].setAttribute('style', `background-color:red;`)
    
    console.log(event.target)
})