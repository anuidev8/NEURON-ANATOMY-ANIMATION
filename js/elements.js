 //PARTS

 export const extraInfoConfig = () => {
   /* Extra info */
   const extraInfoButton = document.querySelectorAll('.extra-info-button')
   const extraInoModal = document.querySelectorAll('.extra-info__modal')

   for (let index = 0; index < extraInfoButton.length; index++) {

     extraInfoButton[index].addEventListener('click', () => {
       extraInoModal[index].classList.toggle('extra-info__modal--open')
     })
   }
 }

 //part container
 export const estructureItem = document.querySelectorAll('.structure-items')

 /* core */
 export const core = document.querySelector('#core')
 export const itemCore = document.querySelector('#item-core')

 /* soma */
 export const soma = document.querySelector('.soma')
 export const itemSoma = document.querySelector('#item-soma')

 /* axon */
 export const axon = document.querySelector('#axonreference')
 export const itemAxon = document.querySelector('#item-axon')

 /* dentritas */
 export const itemDentritas = document.querySelector('#item-dentritas')

 /* Mielina */
 export const mielina = document.querySelector('#mielina')
 export const itemMielina = document.querySelector('#item-mielina')