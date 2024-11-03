
<!-- Initialize Swiper -->
let swiper = new Swiper('.card-content', {
  // Optional parameters
  spaceBetween:32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    600:{
      slidesPerView:2,
    },
    968:{
      slidesPerView:2,
    },
    1100:{
      slidesPerView:3,
    }
  }

  // And if we need scrollbar
});
// work info
    const work = document.querySelectorAll('.work-info'),
    infoButton= document.querySelectorAll('.more-info'),
    infoClose=document.querySelectorAll('.work-info-close');

    let activeInfo=(infoWork)=>{
      work[infoWork].classList.add('active-work')
    }
    infoButton.forEach(
        (infoButton, i)=>{
          infoButton.addEventListener('click',()=>{
            activeInfo(i)
          })
        }
    )
  infoClose.forEach((close) => {close.addEventListener(
      'click',()=>{
        work.forEach((remove)=>{
          remove.classList.remove('active-work')
            }
        )
      })
      }
  )
// menu
const open = document.getElementById('burg-icon');
const close = document.getElementById('close-icon');
const close2 = document.getElementById('close');
const menu_list = document.getElementById('menu-list');
const menu = document.getElementById("navbar-toggler");

function openMenu(){
    menu.style.display = "block";
    open.style.display = "none"
    close.style.display = "block"
    close2.style.display = "block"

}
function closeMenu(){
  menu.style.display = "none";
    open.style.display = "block"
    close.style.display = "none"
    close2.style.display = "none";


}

// animate
let typingText = document.querySelector('.change-text');
let listSkills=['Dev Lead at CNAV','Dev Engineer', 'DevOps Junior'];
if(typingText){
  new Typed('.change-text',{
    strings : listSkills,
    loop: true,
    typeSpeed: 100,
    backSpeed:50,
    backDelay:2000,
    showCursor: false,
  })
}

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    // Toggle the active class for the "X" icon transformation
    toggler.addEventListener("click", function() {
      toggler.classList.toggle("active");
    });

    // Close the menu if clicking outside the navbar
    document.addEventListener("click", function(event) {
      const isClickInside = toggler.contains(event.target) || navbarCollapse.contains(event.target);

      // If click is outside, remove the "show" and "active" classes
      if (!isClickInside && navbarCollapse.classList.contains("show")) {
        toggler.classList.remove("active");
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });


  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });


  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.work-list');
    let port = select('.work');

    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.work'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });


})()

