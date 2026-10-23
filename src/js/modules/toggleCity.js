function toggleCity() {
  const checkCity = document.querySelector('.city-toggle__input');
  const cityContactsMsk = document.querySelector('.contacts__main._msk');
  const cityContactsTm = document.querySelector('.contacts__main._tm');
  if (checkCity) {
    checkCity.addEventListener('change', function () {
      if (this.checked) {
        if (cityContactsMsk.classList.contains('_active')) {
          cityContactsMsk.classList.remove('_active');
        }
        cityContactsTm.classList.add('_active');
      } else {
        if (cityContactsTm.classList.contains('_active')) {
          cityContactsTm.classList.remove('_active');
        }
        cityContactsMsk.classList.add('_active');
      }
    });
  }
}

export function initToggleCity() {
  window.addEventListener('load', toggleCity);
}
