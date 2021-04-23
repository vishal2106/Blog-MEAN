import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', component:WelcomePageComponent },
  {path: 'new_blog', component: NewBlogComponent},
  {path: 'blogs', component: BlogPageComponent},
  {path: 'blogs/:blogId', component: BlogPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
