import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import {RegistrationComponent} from './Registration/registration.component'; 
import {DataService} from './data.service'; 


@NgModule({
  declarations: [
    AppComponent, RegistrationComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
