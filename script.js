let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header navigation a ');

   window.onscroll=()=>{
    sections.forEach(sec=>{
        let top= windows.scrollY;
         let offset=sec.offsetTop-150;
          let height=sec.offsetHeight;
          let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                
                 document.querySelector('header nav a[href='  + id +']').classlist.add('active');
            })

        }  
    });
    // --------------======stiky nav bar ----------------====
    let header=document.querySelector('header');

    header.classlist.toggle('stiky', window.scrollY>100);

   };