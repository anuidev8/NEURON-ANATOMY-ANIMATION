//get height dimentions of the svg
const neuroBranchHeight = document.querySelector('.neuro-branch')
const neuroCoreHeight = document.querySelector('.neuro-core')
const structureContainer = document.querySelector('.structure-container')
structureContainer.style.height = `${neuroBranchHeight.clientHeight + neuroCoreHeight.clientHeight}px`

const declaration = document.documentElement.style;


const getPositionTopParser = (elementRenfrence, curentElement, cor = 0) => {
  const element = document.querySelector(elementRenfrence)
  const current = document.querySelector(curentElement)
  const top = element.getBoundingClientRect().top
  current.style.top = `${Math.floor(top)- cor}px`

}
const getPositionBottomParser = (elementRenfrence, curentElement, cor = 0) => {
  const element = document.querySelector(elementRenfrence)
  const current = document.querySelector(curentElement)
  const top = element.getBoundingClientRect().bottom
  current.style.top = `${Math.floor(top)- cor}px`

}

const currentElements = () =>{
  getPositionTopParser('#core', '#item-core', 290)
  getPositionBottomParser('.soma', '#item-dentritas', 180)
  getPositionTopParser('#axonreference', '#item-axon', 230)
  getPositionTopParser('#mielina', '#item-mielina', 100)
  getPositionTopParser('#sinapsis', '#item-sinapsis', 290)
}
function reportWindowSize() {

  console.log('init resize');
  console.log(window.innerWidth);
  switch (window.innerWidth) {
    case 1280:


      currentElements()

      declaration.setProperty('--w-extructure-info-core', '40%')
      declaration.setProperty('--w-indicator-item-core','70%')

      //SOMA
      getPositionTopParser('.soma', '#item-soma',50)
      
      declaration.setProperty('--w-soma', '-65%')

      //dendritas
      declaration.setProperty('--w-denditras', '-34%')
      declaration.setProperty('--m-info-den', '1em')
      declaration.setProperty('--w-extructure-info-dendritas', '40%')
      
      /* AXON */
      declaration.setProperty('--w-axon', '-34%')
      declaration.setProperty('--w-extructure-info-axon', '40%')
      
      /* MIELINA */
      declaration.setProperty('--p-indicator-item', '-2%')

      /* SINAPSIS */
      declaration.setProperty('--p-indicator-item--sinapsis', '2%')
      declaration.setProperty('--w-inidicator-sinapsis', '55%')
      

      break;
    case 1600:
      currentElements()
      declaration.setProperty('--w-core', '3%')
      /* SOMA */
      getPositionTopParser('.soma','#item-soma',-20)
      declaration.setProperty('--w-soma', '-45%')
      declaration.setProperty('--w-extructure-info-soma', '35%')

      /* AXON */
      declaration.setProperty('--w-axon', '-17%')

      /* DENDRITAS */
      declaration.setProperty('--w-denditras', '-20%')
    break;
    default:
      if(window.innerWidth > 1000 && window.innerWidth < 1200){
        currentElements()

     
        declaration.setProperty('--w-extructure-info-core', '40%')
        declaration.setProperty('--w-indicator-item-core','55%')
        declaration.setProperty('--p-indicator-core','7%')

             //SOMA
             getPositionTopParser('.soma','#item-soma',90)
      declaration.setProperty('--w-soma', '-82%')
      declaration.setProperty('--p-indicator-soma', '40%')
      declaration.setProperty('--p-left-indicator-soma', '-15%')
      declaration.setProperty('--p-left-soma', '30%')
      declaration.setProperty('--w-extructure-info-soma', '20%')

      /* DENDRITAS */
      declaration.setProperty('--w-extructure-info-dendritas', '40%')
      declaration.setProperty('--w-denditras', '-42%')
      declaration.setProperty('--p-indicator-den', '65%')
      declaration.setProperty('--p-indicator-den-top', '-40%')
      declaration.setProperty('--p-indicator-den-left', '-10%')
      declaration.setProperty('--m-left-den-container', '1em')

      /* AXON */
      declaration.setProperty('--w-axon', '-42%')
      declaration.setProperty('--w-extructure-info-axon', '30%')
      declaration.setProperty('--w-structure-info', '300px')
      declaration.setProperty('--p-top-extra-info', '1em')

      /* Mielina */
      declaration.setProperty('--w-inidicator-mielina', '50%')
      declaration.setProperty('--p-indicator-item', '5%')

        /* SINAPSIS */
        declaration.setProperty('--p-indicator-item--sinapsis', '9%')
        declaration.setProperty('--w-inidicator-sinapsis', '55%')


      }else{
        currentElements()
        getPositionTopParser('.soma','#item-soma')
        console.log('default');
      }
 
      break;
  }
  
  /*   getPositionTopParser('#core','#item-core',290)
      getPositionTopParser('.soma','#item-soma')
      getPositionBottomParser('.soma','#item-dentritas',180)
      getPositionTopParser('#axonreference','#item-axon',230)
      getPositionTopParser('#mielina','#item-mielina',100)
      getPositionTopParser('#sinapsis','#item-sinapsis',290) */
}




export default reportWindowSize