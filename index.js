let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
      let top=window.scrollY;
      let offset=sec.offsetTop-150;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id')
      if(top>offset && top<offset + height){
        navLink.forEach(links=>{
          links.classList.remove('active')
          document.querySelector('header nav a[href*='+id+']').classlist.add('active')
        })
      }
    })
}

AOS.init();

let places = document.querySelectorAll('.place-list li')
let active = "/thumbnail/starfield-space-chromebook-wallpaper.jpg";

places.forEach((e) => {
  e.addEventListener("mouseenter", (event) => {
    places.forEach((e) => {
      e.classList.remove("active");
    });

    event.target.classList.add("active");
    active = event.target.getAttribute('data-img');
    let banner = document.querySelector('.banner');
    banner.style.backgroundImage =`url('${active}')`;
  });
});