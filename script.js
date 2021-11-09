const $title = document.getElementById('title')
const $name = document.getElementById('name')
const $container = document.getElementById('container')
const $imageContainer = document.getElementById('imageContainer')
const $popuptext = document.getElementById('popuptext')
const $picture = document.getElementById('picture')



// const imgLabel = [
//     'Image 1',
//     'Image 2',
//     'Image 3',
//     'Image 4',
//     'Image 5',
//     'Image 6',
//     'Image 7',
//     'Image 8',
//     'Image 9',
//     'Image 10',
//     'Image 11',
//     'Image 12'
// ]

const img = [
    `<img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <img id='picture' src="https://picsum.photos/300/300?random=1">`
]



$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'


const $imgdisplay = document.querySelectorAll('.picture')



// for (const $picture of $imgdisplay){

// }
// for (let picNumber = 0; picNumber < 12; picNumber++) {
//     $imageContainer.innerHTML = (`<div id='imageContainer'>
// <img id='picture' src='https://picsum.photos/300/300?random=1'>
// </div>`)
 
  
// }

//    $imageContainer.addEventListener('click', function (event){
//     // $imageContainer.innerHTML = ` ${imgLabel}`
//     $picture.setAttribute('style', `background-color:red;`)
//   console.log(event)

// })

// loop version


for (let picNumber = 0; picNumber < 12; picNumber++) {
    $imageContainer.innerHTML += 
   `<div id='imageContainer'>
    <img id='picture' src="https://picsum.photos/300/300?random=1">
    <p id='popuptext'><span>  </span></p>
    </div>`

}

$imageContainer.addEventListener('click', function (event){
    $imageContainer.children[4].setAttribute('style', `background-color:red;
    `)
   console.log(event)

   $imageContainer.addEventListener('mouseover', function (event){
    $imageContainer.children[4].setAttribute('style', `background-color:green;
    `) 
   }) 
//     if (e.target.contains('pictures')){
//  $imageContainer.innerHTML = 'hi'
//     }
   
})

// $imageContainer.addEventListener('dblclick', function (e){
//     $imageContainer.children[1].textContent = ''
//     console.log(e)
// })