function blogFilter() {
  const filterBtn = document.querySelector('.blog__filter');
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    filterBtn.addEventListener('click', function () {
      sidebar.classList.toggle('_active');
    });
  }
}

export function initBlogFilter() {
  window.addEventListener('load', blogFilter);
}
