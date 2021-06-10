import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

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
