import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, CarouselModule.forRoot(), HttpClientModule],
  exports: [SliderComponent, HttpClientModule],
})
export class SharedModule {}
