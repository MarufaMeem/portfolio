var typed = new Typed(".typing",
{
  strings:["","","web designer","web developer","graphic designer"],
  typespeed:100,
  BackSpeed:60,
  loop:true
})

// const navLinkEls=document.querySelectorAll('.navlink');
// navLinkEls.forEach(navLinkEl =>
//   {
//     navLinkEls.addEventListener('click',function()
//     {
//       document.querySelector('.active')?.classList.remove('active');
//       this.classList.add('active');
//     });
//   });


$(document).ready(function()
{
  $('i').click(function()
  {
    $('ul').toggleClass('show');
  })
})

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('.main-container .nav a');

window.onscroll=()=>{
  sections.forEach(sec=>{
    let top=window.scrollY;
    let offset = sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top>= offset && top<offset+height)
    {
      navlinks.forEach(links=>
        {
          links.classList.remove('active');
          document.querySelector('.main-container .nav a[href*=' + id + ']').classList.add('active');
        })
    }
  })
}

/**
 * Skills animation
 */
let skillsContent = document.querySelector('.skills-content');

if (skillsContent) {
  let skillsObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let progressBars = document.querySelectorAll('.progress .progress-bar');
        progressBars.forEach(bar => {
          bar.style.width = bar.getAttribute('aria-valuenow') + '%';
        });
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: .9 });

  skillsObserver.observe(skillsContent);
}


let valueDisplayss=document.querySelectorAll("progress-bar");
let intervall = 5000;

valueDisplayss.forEach((valueDisplaye)=>{
  let startValuee=0;
  let endValuee=parseInt(valueDisplaye.getAttribute("data-val"));
  let durationn = Math.floor(intervall/endValuee);
  let counterr=setInterval(function(){
    startValuee+=1;
    valueDisplaye.textContent = startValuee;
    if(startValuee==endValuee)
    {
      clearInterval(counterr);
    }
  },durationn);
});

