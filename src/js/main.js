/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'

import AOS from 'aos';
import { Fancybox } from '@fancyapps/ui';
import Swiper from 'swiper';
import {
  Navigation,
  EffectCoverflow,
  EffectFade,
  Autoplay,
  Thumbs,
} from 'swiper';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
// import { smoothScroll } from './libs/smoothScroll';
// import { initScrollProgress } from './libs/scrollProgress';
// import { initImgLazy } from './modules/imgLazy';
// import { initReviewsPopupContent } from './modules/reviews-popup-content';
// import { initFormLists } from './modules/form-list';
// import { initExamTabs } from './modules/exam-tabs';
// import { initExamLoadMore } from './modules/exam-load-more';
// import { initFaqToggle } from './modules/faq-toggle';
// import { initCookia } from './modules/cookia';
// import {
//     toggleSearchOpen,
//     initDownLists,
//     initPortRowsMobile,
// } from './modules/index';

// import { initToggleCity } from './modules/toggleCity';
// import { initOffsetHeight } from './modules/offsetHeight';
// import { initBlogFilter } from './modules/blogFilter';
// import { initAutoplayVideo } from './modules/autoplayVideo';

// import { running } from './libs/running';

// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';

// import { cursorPoint } from './libs/cursorPoint';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();
/* Фиксированный header */
BaseHelpers.headerFixed();

/** ===================================================================================
 * Cкролл Lenis
 * */
// smoothScroll()

/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/** ===================================================================================
 *  Модуль отложенная загрузка изображений
 * data-delay="1000" - задержка  замены пути
 * data-wait - замена пути только после загрузки изображения
 * */
// initImgLazy();
// toggleSearchOpen();
// initDownLists();
// initPortRowsMobile();
// initFormLists();
// initFaqToggle();
// initCookia();

// initReviewsPopupContent();

// initToggleCity();
// initOffsetHeight();
// initBlogFilter();

/** ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// import SimpleParallax from 'simple-parallax-js/vanilla';

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         AOS.init({
//             once: true,
//             duration: 1200, // Длительность анимации (ms)
//             offset: 50, // Смещение от низа экрана до срабатывания (px)
//             delay: 0, // Задержка перед анимацией
//             // easing: 'ease-in-out'
//         });

//         const numFon = document.querySelectorAll('.num__fon .img');
//         numFon.forEach((img) => {
//             if (img) {
//                 new SimpleParallax(img, {
//                     orientation: 'up',
//                     scale: 1.05,
//                     delay: 0.4,
//                 });
//             }
//         });

//         const calmImg = document.querySelectorAll('.calm__img._3 img');
//         calmImg.forEach((img) => {
//             if (img) {
//                 new SimpleParallax(img, {
//                     orientation: 'down',
//                     scale: 1.05,
//                     overflow: true,
//                     delay: 0.4,
//                 });
//             }
//         });

//         const reviewFon = document.querySelectorAll('.review__fon .img');
//         reviewFon.forEach((img) => {
//             if (img) {
//                 new SimpleParallax(img, {
//                     orientation: 'up',
//                     scale: 1.05,
//                     delay: 0.4,
//                 });
//             }
//         });
//     }, 500);
// });

/** ===================================================================================
 * Параллакс мышей
 * */
// new MousePRLX();

/** ===================================================================================
 * Анимация точки курсора
 * */
// cursorPoint()

/** ===================================================================================
 * Бегущая строка
 * */
// running()

/** ===================================================================================
 * Кастомный скролл бар
 * Добавить класс scrollbar-custom к элементу
 * */
// initScrollProgress()

/** ===================================================================================
 * Автоплей и отложенная загрузка видео
 * */
// initAutoplayVideo();

/* ТАБЫ ================================================================================================
 * На wrapper блока табов добавить атрибут data-tabs="название"
 * Для обертки title табов добавить класс "tabs__nav"
 * Для title таба добавить класс "tabs__trigger"
 * Для обертки body табов добавить класс "tabs__content"
 * Для body таба добавить класс "tabs__panel"
 */
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

/* АККАРДЕОН ===========================================================================================
 * Класс wrapper блока аккардеона добавить в инициализацию аккардиона
 * Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
 * Для title аккардеона добавить класс "accordion__header"
 * Для content аккардеона добавить класс "accordion__content"
 */
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив =================================================================================
 * Что бы перебросить блок в другой блок, повешай на него атрибут:
 * data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
 */
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js';
useDynamicAdapt();

/* Маска для инпута tel =================================================================================
 * Добавить класс tel к нужному инпуту
 */
import { maskTel } from './modules/index.js';
maskTel();

/* Cкрыть меню при клике на его ссылки ==================================================================
 */
// import { toggleLinkMenuNoOpen } from './modules/index.js'
//toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ========================================================================
 * Добавить к меню класс 'your-menu'
 */
import { toggleOutClickMenuRemoveOpen } from './modules/index.js';
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента =========================================================
 * Передать в функцию нужный элемент и класс который нужно удалить
 */
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class');
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
 */
Swiper.use([Navigation, EffectCoverflow, EffectFade, Autoplay, Thumbs]);

document.addEventListener('DOMContentLoaded', () => {
  let whatSwiper = null;

  const initWhatSlider = () => {
    const sliderElement = document.querySelector('.what__slider');

    if (!sliderElement) return;

    if (window.innerWidth <= 1200) {
      if (!whatSwiper) {
        whatSwiper = new Swiper('.what__slider', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          grabCursor: true,
          watchSlidesProgress: true,

          // Указываем точный путь к стрелкам в шапке блока
          navigation: {
            nextEl: '.what .what__arrow--next',
            prevEl: '.what .what__arrow--prev',
          },

          breakpoints: {
            320: { slidesPerView: 1.15, spaceBetween: 12 },
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            768: { slidesPerView: 2.3, spaceBetween: 20 },
            992: { slidesPerView: 3.2, spaceBetween: 20 },
          },
        });
      }
    } else {
      if (whatSwiper) {
        whatSwiper.destroy(true, true);
        whatSwiper = null;
      }
    }
  };

  initWhatSlider();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initWhatSlider, 100);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const trubostoykiSlider = document.querySelector('.gallery-trubostoyki');

  if (trubostoykiSlider) {
    new Swiper('.gallery-trubostoyki', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      grabCursor: true,

      // ПОДКЛЮЧЕНИЕ СТРЕЛОК: Указываем точный путь к кнопкам в шапке
      navigation: {
        nextEl: '.trubostoyki .trubostoyki__arrow--next',
        prevEl: '.trubostoyki .trubostoyki__arrow--prev',
      },

      breakpoints: {
        // До 650px — стрелки активны, слайдер свайпается
        320: {
          enabled: true,
          slidesPerView: 'auto',
          spaceBetween: 12,
        },
        // От 651px и выше — слайдер выключается, стрелки засыпают
        651: {
          enabled: false,
          spaceBetween: 0,
        },
      },
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ... ваш предыдущий код слайдеров (задач, трубостоек) остается выше без изменений ...

  const casesSlider = document.querySelector('.cases__slider');

  if (casesSlider) {
    new Swiper('.cases__slider', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      grabCursor: true,

      // Навигация кнопками из шапки
      navigation: {
        nextEl: '.cases .cases__arrow--next',
        prevEl: '.cases .cases__arrow--prev',
      },

      breakpoints: {
        // Слайдер активен на смартфонах и планшетах до 992px
        320: {
          enabled: true,
          slidesPerView: 'auto',
          spaceBetween: 14,
        },
        // От 993px и выше слайдер отключается и превращается в монолитную Grid-ленту
        993: {
          enabled: false,
          spaceBetween: 0,
        },
      },
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ... коды прошлых блоков ...

  const priceSlider = document.querySelector('.price__slider');

  if (priceSlider) {
    new Swiper('.price__slider', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      grabCursor: true,
      navigation: {
        nextEl: '.price .price__arrow--next',
        prevEl: '.price .price__arrow--prev',
      },
      breakpoints: {
        320: { enabled: true, slidesPerView: 'auto', spaceBetween: 12 },
        1025: { enabled: false, spaceBetween: 0 },
      },
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ... прошлые коды слайдеров ...

  const reviewsSlider = document.querySelector('.reviews__slider');

  if (reviewsSlider) {
    new Swiper('.reviews__slider', {
      slidesPerView: 'auto', // Ширина берется из SCSS (440px / 380px / 290px)
      spaceBetween: 24, // Шаг между карточками отзывов
      grabCursor: true,
      watchSlidesProgress: true,

      // Навигация
      navigation: {
        nextEl: '.reviews .reviews__arrow--next',
        prevEl: '.reviews .reviews__arrow--prev',
      },

      breakpoints: {
        320: { spaceBetween: 14 },
        768: { spaceBetween: 20 },
        1200: { spaceBetween: 24 },
      },
    });
  }
});
/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить 
* Добавить каласс _obligat на input которые обязательны для заполнения
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/
// import { sendForm, validForm } from './modules/validFrom.js';
// import { initAutoplayVideo } from './modules/autoplayVideo.js';
// // const popupTranks = document.querySelector('.popup-thanks')
// const forms = document.querySelectorAll('form');

// //==== валидация/отправка ====
// forms.forEach((form) => {
//     validForm(form);
//     // sendForm(form)
// });

//==== валидация ====

//==== валидация ====

//==== валидация ====

//==== валидация ====
// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
 * Вызвать функцию и передать в нее массив нужных элементов
 * При клике на элемент, у всех элементов класс удаляется
 */
// import { toggleActiveClassParent } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClassParent(elementAll)

/* Динамический класса _active элементу при клике ========================================================
 * Вызвать функцию и передать в нее массив нужных элементов
 * При клике на элемент, у всех элементов класс удаляется
 */
// import { toggleActiveClass } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClass(elementAll)

// document.addEventListener('DOMContentLoaded', function() {
//     const socPan = document.querySelector('.soc-pan');
//     const btn = socPan ? socPan.querySelector('.soc-pan__btn') : null;

//     if (!socPan || !btn) return;

//     // Функция закрытия панели
//     function closePanel() {
//         socPan.classList.remove('_active');
//     }

//     // Функция открытия панели
//     function openPanel() {
//         socPan.classList.add('_active');
//     }

//     // Обработчик клика по кнопке: переключение класса
//     btn.addEventListener('click', function(e) {
//         e.stopPropagation(); // чтобы клик не всплывал на document
//         if (socPan.classList.contains('_active')) {
//             closePanel();
//         } else {
//             openPanel();
//         }
//     });

//     // Обработчик клика по document: если клик вне soc-pan, закрываем
//     document.addEventListener('click', function(e) {
//         if (!socPan.contains(e.target)) {
//             closePanel();
//         }
//     });
// });

Fancybox.bind('[data-fancybox]', {
  // Тут можно передать кастомные настройки, например, отключить анимацию или поменять язык:
  closeButton: true,
  Drag: {
    vAxis: false, // Отключает закрытие свайпом вниз, если мешает на мобилках
  },
});

// Fancybox.bind('[data-fancybox]', {});
// const portfolioSlider = new Swiper('.portfolio-slider', {
//     observer: true,
//     observeParents: true,
//     touchEventsTarget: 'container',
//     // ОБЯЗАТЕЛЬНО для Swiper 10: передаем импортированные модули сюда
//     modules: [Navigation],

//     loop: true,
//     pagination: false,

//     navigation: {
//         nextEl: '.portfolioNext',
//         prevEl: '.portfolioPrev',
//     },
// });

document.addEventListener('DOMContentLoaded', () => {
  const btnToTop = document.getElementById('btnToTop');
  const firstSection = document.querySelector('.page__utp'); // Первый экран (УТП)

  if (btnToTop && firstSection) {
    // Настраиваем наблюдатель за первым блоком
    const observerOptions = {
      root: null, // Отслеживаем относительно окна браузера
      threshold: 0, // Сработает, как только край блока коснется границы окна
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Если первый блок полностью или частично скрылся из виду (isIntersecting === false),
        // это значит, что пользователь доскроллил до второго блока
        if (!entry.isIntersecting) {
          btnToTop.classList.add('is-visible');
        } else {
          // Если вернулись на самый верх — плавно скрываем кнопку
          btnToTop.classList.remove('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(firstSection);

    // Плавный скролл на самый верх страницы при клике
    btnToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Обеспечивает премиальное плавное скольжение вверх
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const animItems = document.querySelectorAll('._anim-item');

  if (animItems.length > 0) {
    const observerOptions = {
      root: null, // Отслеживаем относительно окна браузера
      rootMargin: '0px 0px -15% 0px', // Срабатывает, когда элемент зашел в экран снизу на 15%
      threshold: 0, // Срабатывает мгновенно при пересечении границы
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;

          // Добавляем класс активации
          target.classList.add('_active');

          // Отписываемся от слежки за этим элементом, чтобы анимация не проигрывалась повторно при каждом скролле туда-сюда
          observer.unobserve(target);
        }
      });
    };

    const animObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Включаем слежку за каждым элементом
    animItems.forEach((item) => animObserver.observe(item));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const numberElements = document.querySelectorAll('._anim-number');

  if (numberElements.length > 0) {
    // Функция плавной анимации набора числового значения
    const animateNumber = (element) => {
      try {
        const target = parseInt(element.getAttribute('data-target'), 10);
        if (isNaN(target)) return;

        const duration = 1500; // Общее время анимации в миллисекундах (1.5 сек)
        const startTime = performance.now();

        const updateNumber = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);

          // Функция плавности (EaseOutQuad) для замедления в самом конце
          const easeProgress = progress * (2 - progress);
          const currentValue = Math.floor(easeProgress * target);

          // Форматируем вывод (добавляем пробелы для крупных чисел, например: 1 200)
          element.textContent = currentValue.toLocaleString('ru-RU');

          if (progress < 1) {
            requestAnimationFrame(updateNumber);
          } else {
            element.textContent = target.toLocaleString('ru-RU');
          }
        };

        requestAnimationFrame(updateNumber);
      } catch (err) {
        console.error('Ошибка анимации числа:', err);
      }
    };

    // Настраиваем Intersection Observer для запуска при скролле
    const observerOptions = {
      root: null,
      threshold: 0.1, // Сработает, когда блок покажется в экране на 10%
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          animateNumber(element); // Запускаем счётчик
          observer.unobserve(element); // Отписываемся, чтобы не крутить повторно
        }
      });
    };

    const numberObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // ИСПРАВЛЕНО: Чистый и аккуратный обход элементов без синтаксических ошибок
    numberElements.forEach((elem) => {
      if (elem) numberObserver.observe(elem);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const quizPopup = document.querySelector('[data-popup="popup-quiz"]');

  if (quizPopup) {
    const steps = quizPopup.querySelectorAll('.quiz__step');
    const btnPrev = quizPopup.querySelector('#quizBtnPrev');
    const btnNext = quizPopup.querySelector('#quizBtnNext');
    const btnSubmit = quizPopup.querySelector('#quizBtnSubmit');

    const currentStepText = quizPopup.querySelector('#quizCurrentStep');
    const percentText = quizPopup.querySelector('#quizPercent');
    const progressLine = quizPopup.querySelector('#quizProgressLine');

    let currentStep = 1;
    const totalSteps = steps.length; // 4 шага

    // Функция обновления интерфейса шага и прогресс-бара
    const updateQuizInterface = () => {
      // 1. Показываем/скрываем шаги
      steps.forEach((step) => {
        const stepNum = parseInt(step.getAttribute('data-step'), 10);
        if (stepNum === currentStep) {
          step.classList.add('is-active');
        } else {
          step.classList.remove('is-active');
        }
      });

      // 2. Расчет и запуск линии прогресс-бара
      const percent = Math.floor((currentStep / totalSteps) * 100);
      if (currentStepText) currentStepText.textContent = currentStep;
      if (percentText) percentText.textContent = `${percent}%`;
      if (progressLine) progressLine.style.width = `${percent}%`;

      // 3. Управление видимостью навигационных кнопок в подвале
      if (currentStep === 1) {
        btnPrev.style.display = 'none'; // На первом шаге кнопки "Назад" нет
      } else {
        btnPrev.style.display = 'block';
      }

      if (currentStep === totalSteps) {
        btnNext.style.display = 'none'; // На последнем шаге скрываем "Далее"
        btnSubmit.style.display = 'block'; // И показываем финальную кнопку отправки формы
      } else {
        btnNext.style.display = 'block';
        btnSubmit.style.display = 'none';
      }
    };

    // Клик по кнопке "Далее"
    btnNext.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        updateQuizInterface();
      }
    });

    // Клик по кнопке "Назад"
    btnPrev.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateQuizInterface();
      }
    });

    // Сброс квиза на 1 шаг при закрытии модального окна, чтобы при следующем открытии опрос шел заново
    const observer = new MutationObserver(() => {
      if (!quizPopup.classList.contains('is-open') && currentStep !== 1) {
        setTimeout(() => {
          currentStep = 1;
          updateQuizInterface();
        }, 400); // Сбрасываем после плавного скрытия окна
      }
    });
    observer.observe(quizPopup, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
});
