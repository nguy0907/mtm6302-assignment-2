
//data
const $container = document.getElementById('container')
const $title = document.getElementById('title')
const $name = document.getElementById('name')
// const $imageContainer = document.getElementById('imageContainer')
const $popuptext = document.getElementById('popuptext')

$title.textContent = 'Image Gallery'
$name.textContent = 'Richard N'

// Code
const imageContainer = `<div id='imageContainer'>
 <img class='picture' src="https://picsum.photos/300/300?random=1">
 <p id='caption'> <p>
 </div>`


const selectimage = document.querySelectorAll('.container')



for (let picNumber = 0; picNumber < 12; picNumber++) {
  $container.insertAdjacentHTML('beforeend', imageContainer)

$container.children[0].addEventListener('click', function (event){
 $container.children[0].setAttribute('style', 
 `background-color:#D8E2DC; padding-top:3em;`)
 if (event.target.className === 'picture'){
console.log('go')
 }
})
$container.children[0].addEventListener('dblclick', function (event){
  $container.children[0].setAttribute('style', `background-color:white;`)
 })
 
}

$container.children[1].addEventListener('click', function (event){
  $container.children[1].setAttribute('style', 
  `background-color:#D8E2DC; padding-top:3em;`)
 })
 $container.children[1].addEventListener('dblclick', function (event){
   $container.children[1].setAttribute('style', `background-color:white;`)
  })


  $container.children[2].addEventListener('click', function (event){
    $container.children[2].setAttribute('style', 
    `background-color:#D8E2DC; padding-top:3em;`)
   })
   $container.children[2].addEventListener('dblclick', function (event){
     $container.children[2].setAttribute('style', `background-color:white;`)
    })


    $container.children[3].addEventListener('click', function (event){
        $container.children[3].setAttribute('style', 
        `background-color:#D8E2DC; padding-top:3em;`)
       })
       $container.children[3].addEventListener('dblclick', function (event){
         $container.children[3].setAttribute('style', `background-color:white;`)
        })


        $container.children[4].addEventListener('click', function (event){
          $container.children[4].setAttribute('style', 
          `background-color:#D8E2DC; padding-top:3em;`)
         })
         $container.children[4].addEventListener('dblclick', function (event){
           $container.children[4].setAttribute('style', `background-color:white;`)
          })


          $container.children[5].addEventListener('click', function (event){
            $container.children[5].setAttribute('style', 
            `background-color:#D8E2DC; padding-top:3em;`)
           })
           $container.children[5].addEventListener('dblclick', function (event){
             $container.children[5].setAttribute('style', `background-color:white;`)
            })

            
            $container.children[6].addEventListener('click', function (event){
              $container.children[6].setAttribute('style', 
              `background-color:#D8E2DC; padding-top:3em;`)
             })
             $container.children[6].addEventListener('dblclick', function (event){
               $container.children[6].setAttribute('style', `background-color:white;`)
              })


              $container.children[7].addEventListener('click', function (event){
                $container.children[7].setAttribute('style', 
                `background-color:#D8E2DC; padding-top:3em;`)
               })
               $container.children[7].addEventListener('dblclick', function (event){
                 $container.children[7].setAttribute('style', `background-color:white;`)
                })


                $container.children[8].addEventListener('click', function (event){
                  $container.children[8].setAttribute('style', 
                  `background-color:#D8E2DC; padding-top:3em;`)
                 })
                 $container.children[8].addEventListener('dblclick', function (event){
                   $container.children[8].setAttribute('style', `background-color:white;`)
                  })


                  $container.children[9].addEventListener('click', function (event){
                    $container.children[9].setAttribute('style', 
                    `background-color:#D8E2DC; padding-top:3em;`)
                   })
                   $container.children[9].addEventListener('dblclick', function (event){
                     $container.children[9].setAttribute('style', `background-color:white;`)


                    })
                    $container.children[10].addEventListener('click', function (event){
                      $container.children[10].setAttribute('style', 
                      `background-color:#D8E2DC; padding-top:3em;`)
                     })
                     $container.children[10].addEventListener('dblclick', function (event){
                       $container.children[10].setAttribute('style', `background-color:white;`)
                      })

                      $container.children[11].addEventListener('click', function (event){
                        $container.children[11].setAttribute('style', 
                        `background-color:#D8E2DC; padding-top:3em;`)
                       })
                       $container.children[11].addEventListener('dblclick', function (event){
                         $container.children[11].setAttribute('style', `background-color:white;`)
                        })

                   