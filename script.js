const $title = document.getElementById('title')
const $name = document.getElementById('name')
const $container = document.getElementById('container')
const $imageContainer = document.getElementById('imageContainer')
const $popuptext = document.getElementById('popuptext')
const $picture = document.getElementById('picture')



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

const img = []

$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'


const $imgdisplay = document.querySelectorAll('.picture')

// for (const $picture of $imglist){


// for (let picNumber = 0; picNumber < 11; picNumber++) {
// img.push(`<div id='imageContainer'>
// <img id='picture' src='https://picsum.photos/300/300?random=1'>
// <p id='popuptext'><span> Click </span></p>
// </div>`)
//     $imageContainer.addEventListener('click', function (event){
//     $imageContainer.innerHTML = ` ${imgLabel}`
//   console.log(event)

// })
   
// }

// }







// loop version


for (let picNumber = 0; picNumber < 11; picNumber++) {
    $imageContainer.innerHTML += 
   `<div id='imageContainer'>
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <p id='popuptext'><span>  </span></p>
    </div>`

}

$imageContainer.addEventListener('click', function (event){
    $imageContainer.children[7].textContent = 'This is an image'
   console.log(event)
//     if (e.target.contains('pictures')){
//  $imageContainer.innerHTML = 'hi'
//     }
   
})

