document.addEventListener("DOMContentLoaded",()=>{
  
  function animateMasks()
  {
    const masks=document.querySelectorAll(".home-img .mask");
    const clipPathValues=[
      "polygon(10% 0,0 0,0 100%,10% 100%)",
      "polygon(20% 0,10% 0,10% 100%,20% 100%)",
      "polygon(30% 0,20% 0,20% 100%,30% 100%)","polygon(40% 0,30% 0,30% 100%,40% 100%)","polygon(50% 0,40% 0,40% 100%,50% 100%)","polygon(60% 0,50% 0,50% 100%,60% 100%)","polygon(70% 0,60% 0,60% 100%,70% 100%)","polygon(80% 0,70% 0,70% 100%,80% 100%)","polygon(90% 0,80% 0,80% 100%,90% 100%)","polygon(100% 0,90% 0,90% 100%,100% 100%)",
    ];
  
    setTimeout(()=>{
      masks.forEach((mask,index)=>{
        gsap.to(mask,{
          clipPath:clipPathValues[index%clipPathValues.length],
          duration:1,
          delay:index*0.1,
        })
      })
    })
  }
  
  gsap.to(counter,{
    innerHTML:100+"%",
    duration:3,
    snap:"innerHTML",
    ease:"none",
    onComplete:()=>{
      setTimeout(()=>
     shuffleText("MCLN/23",20,()=>{
  setTimeout(removeLetters,500);
     }), 500)
  }
  })
  
  
  function fadeOutLoader(){
    gsap.to(loader,{
      opacity:0,
      pointerEvents:"none",
      duration:1,
      onComplete:()=>{
        animateMasks();
      }
    })
  }})