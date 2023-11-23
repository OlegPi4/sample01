"use strict"
/* -------Определение устройства-------*/ 
const isMobile = {
   Android: function() {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function() {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
};
if (isMobile.any()) {
   document.body.classList.add('_touch')

   let menuArrows = document.querySelectorAll('.menu__arrow')
   menuArrows.forEach(menuArrow => {
          menuArrow.addEventListener("click", toggleClass)
          function toggleClass(e) {
            menuArrow.parentElement.classList.toggle('_active')  
          }; 
   })            

} else {
   document.body.classList.add('_pc')
}

// Установка левого отступа в случае если ширина меню равна ширине контента
// function positionMenu() {
// const widthWind = document.documentElement.clientWidth
// const widthContant = 1200 // ширина контента 
// let left = ((widthWind - widthContant) / 2);
// if (left>0) { 
//    const elem = document.querySelector('.header') // элемент в котором задается позиционирование 
//    left = left + 'px'
//    elem.style.cssText += `
//       left: ${left};
//    ` 
//    }
// }
// positionMenu()
// // Тоже самое в случае изменения ширины окна пользователем
// window.addEventListener("resize", positionMenu)

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if(menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick)
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.     goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto)
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; 

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active')
            menuBody.classList.remove('_active')
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
if(iconMenu) {
   iconMenu.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')
   })
}
