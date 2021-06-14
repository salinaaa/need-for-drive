import {Component, OnInit} from '@angular/core';

const slides = [
  {
    title: 'Бесплатный парковка',
    descr: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    image: '1.jpg',
    active: true
  },
  {
    title: 'Страховка',
    descr: 'Полная страховка автомобиля.',
    image: '2.jpg',
    active: false
  },
  {
    title: 'Бензин',
    descr: 'Полный бак на любой заправке города за наш счёт.',
    image: '3.jpg',
    active: false
  },
  {
    title: 'Обслуживание',
    descr: 'Автомобиль проходит еженедельное ТО.',
    image: '4.jpg',
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