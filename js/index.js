const breadcumbs = document.querySelectorAll('.breadcumbs');
const mobileNav = document.querySelectorAll('.mobile-nav');
const closeBtn = document.querySelectorAll('.close-btn');
const dropdownTxt = document.querySelector('.dropdownTxt');
const dropdownList = document.querySelector('.dropdown-list');

const dropdownMobileTxt = document.querySelector('.dropdownMobileTxt');
const dropdownMobileList = document.querySelector('.dropdown-list-mobile');

function showHideDropdown (e, clickItem, dropdown) {
  if (dropdown.contains(e.target)) {
    return;
  } else {
    if (
      clickItem.contains(e.target) &&
      dropdown.classList.contains('d-none')
    ) {
      dropdown.classList.remove('d-none');
    } else {
      dropdown.classList.add('d-none');
    }
  }
}

breadcumbs[0].addEventListener('click', () => {
  mobileNav[0].classList.add('active');
});

closeBtn[0].addEventListener('click', () => {
  mobileNav[0].classList.remove('active');
});

window.addEventListener('click', function (e) {
  showHideDropdown(e, dropdownTxt, dropdownList)
  showHideDropdown(e, dropdownMobileTxt, dropdownMobileList)
});
