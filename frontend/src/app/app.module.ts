import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    NewBlogComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
