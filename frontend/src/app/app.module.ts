import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WebReqInterceptor } from './web-req.interceptor';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditBlogComponent } from './pages/edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    NewBlogComponent,
    WelcomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    EditBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
