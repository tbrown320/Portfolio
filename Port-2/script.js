// ==========================================================================
// Thay Brown Portfolio - Scripts
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  setFooterYear();
});

/**
 * Handles the mobile hamburger menu:
 * - toggles the link list open/closed
 * - closes the menu automatically when a link is clicked
 * - closes the menu if the window is resized back to desktop width
 */
function initMobileNav() {
  let toggleButton = document.querySelector('.nav-toggle');
  let navLinks = document.querySelector('nav .links');

  // Bail out early if either element is missing (defensive check,
  // in case the markup changes later)
  if (!toggleButton || !navLinks) {
    return;
  }

  toggleButton.addEventListener('click', function () {
    let isOpen = navLinks.classList.toggle('is-open');
    toggleButton.classList.toggle('is-open', isOpen);

    // Helps screen readers announce the menu state
    toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu once someone taps a link, instead of making
  // them close it manually before the page scrolls
  let links = navLinks.querySelectorAll('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      navLinks.classList.remove('is-open');
      toggleButton.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  }

  // If the user resizes the browser past the mobile breakpoint
  // while the menu is open, reset it so it isn't stuck open on desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) {
      navLinks.classList.remove('is-open');
      toggleButton.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Keeps the copyright year in the footer current without
 * needing to update it by hand every year.
 */
function setFooterYear() {
  let yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
