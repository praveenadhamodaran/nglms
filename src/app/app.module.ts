import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,
  RouterModule.forRoot([  
    {path: '', component: LoginComponent },
              {path: 'login', component: HomeComponent },
               {path: 'invalid', component: LoginComponent },
                {path: 'reg', component: RegisterComponent },
               {path: 'home', component: HomeComponent },
        ])],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomeComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
