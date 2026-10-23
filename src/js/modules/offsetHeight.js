function offsetHeight() {
  const currentElement = document.querySelectorAll('.cardBlog__descr');
  for (let i = 0; i < currentElement.length; i++) {
    if (currentElement[i]) {
      const previousElement = currentElement[i].previousElementSibling;
      const prevHeight = previousElement.offsetHeight;
      if (prevHeight > 45) {
        currentElement[i].classList.add('_row');
        console.log(prevHeight);
      }
    }
  }
}
export function initOffsetHeight() {
  window.addEventListener('load', offsetHeight);
}
