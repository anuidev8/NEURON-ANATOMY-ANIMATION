
//main capsule
const path = document.querySelector('.line-nucleo');
const circle = document.querySelector('.capsule');

//particules
const particle = document.querySelector('.particule-2');
const particletwo = document.querySelector('.particule-1');
const particlePath = document.querySelector('.particle-path');



 function trackingCapsule() {
		let pathPosition = path.getBoundingClientRect();

		const pathTotalLength = path.getTotalLength();
		// SVG passes center of screen
        const pathHeight = pathPosition.height
		const relativePageOffset = -pathPosition.top +
					(window.pageYOffset + window.innerHeight * .5);
      
		const pointPercentage = relativePageOffset / pathPosition.height;
		const pointOnPath = pointPercentage * pathTotalLength;
		const pathPoint = path.getPointAtLength(pointOnPath);
        circle.style.transition = '3s ease' 
        circle.style.opacity = `${Math.floor(pointOnPath) > 180 ? 0 :1}`   
		circle.style.transform = `translate(0px,${Math.floor(pointOnPath) > pathHeight ? pathHeight :pointOnPath}px
		) scale(${Math.floor(pointOnPath) > 150 ? .3 : 1.5})`;
}

  const init = () =>{
	const animationOnScrolling = () => {
		trackingCapsule()
	}

	const tl = gsap.timeline({
		defaults: {
		  duration: 0.05, 
		  autoAlpha: 1, 
		  scale: 2, 
	
		
		}})
	
	const action = gsap.timeline({defaults: {duration: 1},
		scrollTrigger: {
		  trigger: "#svg",
		  scrub: true,
		  start: "center bottom",
		  ease: "power2",
		
		}})
	  
	  
	  .to(particle, {stagger:1,motionPath: {path: particlePath,align: particlePath, alignOrigin: [0.5, 0],autoRotate: true}}, 0)
	
	  .to(particletwo, {stagger:1,motionPath: {path: particlePath,align: particlePath, alignOrigin: [0.5, 0],autoRotate: true}},"-=.6")
	  .add(tl, 0);
	
	
	
	window.addEventListener('scroll', animationOnScrolling)
}

export default init




