import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';
class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initSwiper();
  }
  initSwiper() {
    const swiper = new Swiper('.js-swiper', {
      speed: 400,
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    });
  }
}
new Main();
