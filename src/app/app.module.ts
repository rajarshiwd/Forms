import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {RegistrationComponent} from './Registration/registration.component';

@NgModule({
  declarations: [
    AppComponent, RegistrationComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
