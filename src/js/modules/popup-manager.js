import Popup from '../helpers/popup';

class PopupManager extends Popup {
  constructor(options = {}) {
    super();

    const defaultOptions = {
      isOpenClass: 'is-open',
      buttonCloseName: 'button-close',
      visibilityDelay: 3000,
    };

    this.options = { ...defaultOptions, ...options };
    this.timers = new Map();

    this.init();
    this.addEventListeners();
  }

  init() {
    this.popups.forEach((popup) => {
      popup.setAttribute('aria-hidden', 'true');
      popup.style.visibility = 'hidden';
    });

    if (!sessionStorage.getItem('popup-utp-shown')) {
      this.autoOpen('popup-utp', 50000);
    }
  }

  autoOpen(popupName, delay = 1000) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const popup = this.getPopupBySelector(popupName);

        if (popup && this.isOpenElements.length === 0) {
          this.openPopup(popup);
          this.toggleBodyLock(true);
          sessionStorage.setItem('popup-utp-shown', 'true');
        }
      }, delay);
    });
  }

  addEventListeners() {
    document.addEventListener('click', this.togglePopup.bind(this));
  }

  togglePopup(e) {
    const { target } = e;
    const targetDataTypeElement = target.closest('[data-type]');

    if (targetDataTypeElement && !target.closest('[data-popup]')) {
      const popupName = targetDataTypeElement.dataset.type;
      const popup = this.getPopupBySelector(popupName);

      if (popup) {
        this.isOpenElements.forEach((modal) => this.closePopup(modal));

        // БЕЗОПАСНАЯ ИНТЕГРАЦИЯ: Генерируем плеер только если это окно видео
        if (popupName === 'popup-video') {
          this.injectVkVideo(targetDataTypeElement, popup);
        }

        this.openPopup(popup);
        this.toggleBodyLock(true);
        return; // Останавливаем выполнение, чтобы не срабатывали лишние проверки
      }
    }

    // Проверяем клик по кнопке закрытия
    const targetCloseElement = target.closest(
      `.${this.options.buttonCloseName}`
    );
    if (targetCloseElement) {
      const popupToClose = targetCloseElement.closest('[data-popup]');
      if (popupToClose) {
        this.closePopup(popupToClose);
        this.toggleBodyLock(false);
      }
    }

    // Проверяем клик по оверлею
    if (this.isOverlayClick(target)) {
      const popupToClose = target.closest('[data-popup]');
      if (popupToClose) {
        this.closePopup(popupToClose);
        this.toggleBodyLock(false);
      }
    }
  }

  // Метод встраивания iframe с защитой от блокировки автоплея
  injectVkVideo(triggerElement, popup) {
    try {
      const videoSrc = triggerElement.getAttribute('data-vk-video');
      const videoBody = popup.querySelector('.popup__video-body');

      if (videoSrc && videoBody) {
        // Добавляем autoplay=1 и muted=1, чтобы браузер гарантированно разрешил старт видео без ошибок
        const autoplaySrc = videoSrc.includes('?')
          ? `${videoSrc}&autoplay=1&muted=1`
          : `${videoSrc}?autoplay=1&muted=1`;

        videoBody.innerHTML = `
          <iframe src="${autoplaySrc}" 
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" 
                  frameborder="0" 
                  allowfullscreen>
          </iframe>`;
      }
    } catch (error) {
      console.error('Ошибка инициализации видео-плеера:', error);
    }
  }

  // Метод полной остановки видео
  destroyVkVideo(popup) {
    if (popup && popup.dataset.popup === 'popup-video') {
      const videoBody = popup.querySelector('.popup__video-body');
      if (videoBody) {
        videoBody.innerHTML = ''; // Полностью удаляем iframe из DOM, убирая фоновый звук
      }
    }
  }

  isOverlayClick(target) {
    const popup = target.closest('[data-popup]');
    if (!popup) return false;

    const popupContent = popup.querySelector('.popup__content');
    if (!popupContent) return false;

    return !popupContent.contains(target);
  }

  getPopupBySelector(popupName) {
    return document.querySelector(`[data-popup="${popupName}"]`);
  }

  get popups() {
    return document.querySelectorAll('[data-popup]');
  }

  get isOpenElements() {
    return document.querySelectorAll(`.${this.options.isOpenClass}`);
  }

  openPopup(popup) {
    this.clearPopupTimer(popup);
    popup.style.visibility = 'visible';

    setTimeout(() => {
      popup.classList.add(this.options.isOpenClass);
      popup.setAttribute('aria-hidden', 'false');
    }, 50); // Уменьшили задержку для мгновенного отклика интерфейса
  }

  closePopup(popup) {
    if (!popup) return;

    popup.classList.remove(this.options.isOpenClass);
    popup.setAttribute('aria-hidden', 'true');

    // Глушим видео моментально в момент нажатия на закрытие
    this.destroyVkVideo(popup);

    this.clearPopupTimer(popup);

    const timerId = setTimeout(() => {
      popup.style.visibility = 'hidden';
      this.timers.delete(popup);
    }, this.options.visibilityDelay);

    this.timers.set(popup, timerId);
  }

  clearPopupTimer(popup) {
    if (this.timers.has(popup)) {
      clearTimeout(this.timers.get(popup));
      this.timers.delete(popup);
    }
  }

  closeAllPopups() {
    this.popups.forEach((popup) => {
      this.clearPopupTimer(popup);
      this.destroyVkVideo(popup);
      popup.classList.remove(this.options.isOpenClass);
      popup.setAttribute('aria-hidden', 'true');
      popup.style.visibility = 'hidden';
    });
    this.toggleBodyLock(false);
  }

  destroy() {
    this.timers.forEach((timerId, popup) => clearTimeout(timerId));
    this.timers.clear();
    document.removeEventListener('click', this.togglePopup.bind(this));
  }
}

export default PopupManager;
