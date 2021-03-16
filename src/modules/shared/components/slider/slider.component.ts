import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  images: string[] = new Array(
    '../../../../assets/slider-images/shoe.jpeg',
    '../../../../assets/slider-images/shoeForslider2.jpg',
    '../../../../assets/slider-images/shoeForSlider4.jpeg',
    '../../../../assets/slider-images/shoeForSlider5.jpeg'
  );
  constructor() {}

  ngOnInit(): void {}
}
