import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [{ path: 'slider', component: SliderComponent }];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SliderComponent,
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
