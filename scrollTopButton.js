var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;
var TOGGLE_RATIO = 0.05;

function handleScroll() {
  // do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > TOGGLE_RATIO) {
    //show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    //hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  //scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
