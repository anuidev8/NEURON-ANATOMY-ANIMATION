
function pathPrepare(el) {
    
    var lineLength = el[0].getTotalLength();
    el[0].setAttribute("stroke-dasharray", lineLength);
    el[0].setAttribute("stroke-dashoffset", lineLength);
  }
  
  gsap.timeline()
  .from(".main-title",{y:300,opacity:0,ease:Expo.easeOut,duration:1})
  .from(".neuro-core",{opacity:0,ease:Expo.easeOut,duration:1})
  .from(".neuro-branch",{opacity:0,ease:Expo.easeOut,duration:1.2})

export function addTimeline(project, index) {
    const path = project.querySelectorAll(".show-line")
  const info = project.querySelector(".extructure-info-content");
  const pointIndicator = project.querySelectorAll('.pointer-indicator')
  const extraInfo = project.querySelector('.extra-info')
  

 pathPrepare(path);
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      start: "top center",
      ease: "power2",
      toggleActions: "play none none reverse"
    }
  })

  .to(path, 0.9, {
    strokeDashoffset: 0,
    ease:Expo.easeOut,
    stagger: 1
  },"-=2")
  .from(pointIndicator, {
   scale:0,x:info.id == 'axon-content' || info.id == 'dentritas-content' ? 10 : -350 , opacity: 0,stagger:2,duration:.8,
  },"-=1")
  .from(info, {
     x: info.classList.contains('translate-right') ? -200 : 200,
     opacity: 0,
     duration: .8,
   }) 
   .from(extraInfo, {
    x: info.classList.contains('translate-right') ? -200 : 200,
    opacity: 0,
    duration: .8,
  }) 
  
}





  

