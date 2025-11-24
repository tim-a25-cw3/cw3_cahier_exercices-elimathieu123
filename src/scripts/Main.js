import Icons from './utils/Icons.js';

Icons.load();

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
      pagination: {
        el: '.swiper-pagination',
      },
      grid: {
        rows: 1,
      },
    });
  }
}
new Main();
