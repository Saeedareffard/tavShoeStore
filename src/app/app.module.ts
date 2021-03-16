import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientModule } from 'src/modules/client/client.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/modules/shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginClientComponent } from 'src/modules/client/components/login-client/login-client.component';
import { MaterialModule } from 'src/modules/material/material.module';

@NgModule({
  declarations: [AppComponent, LoginClientComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ClientModule,
    SharedModule,
    CarouselModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
