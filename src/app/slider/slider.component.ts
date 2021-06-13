import {Component, OnInit} from '@angular/core';

const slides = [
  {
    title: 'Бесплатный парковка',
    descr: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    image: 'img_1.png',
    active: true
  },
  {
    title: 'Страховка',
    descr: 'Полная страховка автомобиля.',
    image: 'img_2.png',
    active: false
  },
  {
    title: 'Бензин',
    descr: 'Полный бак на любой заправке города за наш счёт.',
    image: 'img_3.png',
    active: false
  },
  {
    title: 'Обслуживание',
    descr: 'Автомобиль проходит еженедельное ТО.',
    image: 'img_4.png',
    active: false
  },
]

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

    slides = slides;
    activeSlideIndex: number | undefined;
    slideWidth: number | undefined = 0;
    private intervalId: number | undefined = undefined;
  
    getActiveSlideIndex() {
      this.activeSlideIndex = this.slides.findIndex(slide => slide.active)
    }
  
    getSlideWidth() {
      // @ts-ignore
      this.slideWidth = document.querySelector('.slider__slide').getBoundingClientRect().width
    }
  
    constructor() {
      this.getActiveSlideIndex();
    }
  
    ngOnInit(): void {
    }
  
    selectSlide($event: Event) {
      clearInterval(this.intervalId)
      this.slides.forEach(slide => slide.active = false);
      // @ts-ignore
      const slide = this.slides.find(slide => slide.title === $event.target.title)
      // @ts-ignore
      slide.active = true;
      this.getSlideWidth();
      this.getActiveSlideIndex();
    }
  
    next() {
      clearInterval(this.intervalId)
      const index = this.activeSlideIndex;
      // @ts-ignore
      let newIndex = index + 1;
      if (newIndex >= this.slides.length) newIndex = 0;
      this.slides.forEach(slide => slide.active = false);
      this.slides[newIndex].active = true;
      this.getSlideWidth();
      this.getActiveSlideIndex();
    }
  
    prev() {
      clearInterval(this.intervalId)
      const index = this.activeSlideIndex;
      // @ts-ignore
      let newIndex = index - 1;
      if (newIndex < 0) newIndex = this.slides.length - 1;
      this.slides.forEach(slide => slide.active = false);
      this.slides[newIndex].active = true;
      this.getSlideWidth();
      this.getActiveSlideIndex();
    }
  
    calculateRight() {
      // @ts-ignore
      return (this.activeSlideIndex * this.slideWidth) + 'px'
    }
  }

  
/*
export class SliderComponent {

  imageObject = [{
    image: 'https://storge.pic2.me/c/1360x800/320/583d3417b5bea.jpg',
    thumbImage: 'https://storge.pic2.me/c/1360x800/320/583d3417b5bea.jpg',
    title: 'Maclaren'
}, {
    image: 'https://riamo.ru/files/image/08/62/69/gallery!0mcv.jpg',
    thumbImage: 'https://riamo.ru/files/image/08/62/69/gallery!0mcv.jpg',
    title: 'Ferrari'
}, {
    image: 'https://s1.1zoom.ru/b4566/524/BMW_GTS_F83_Black_563333_1920x1080.jpg',
    thumbImage: 'https://s1.1zoom.ru/b4566/524/BMW_GTS_F83_Black_563333_1920x1080.jpg',
    title: 'BMW'
},{
    image: 'https://www.1zoom.ru/big2/88/239757-dikemoon.jpg',
    thumbImage: 'https://www.1zoom.ru/big2/88/239757-dikemoon.jpg',
    title: 'AUDI'
}, {
    image: 'https://wpapers.ru/wallpapers/avto/Nissan/10895/1920x1080_GTR-TUNING.jpg',
    thumbImage: 'https://wpapers.ru/wallpapers/avto/Nissan/10895/1920x1080_GTR-TUNING.jpg',
    title: 'Nissan'
}];

}
*/