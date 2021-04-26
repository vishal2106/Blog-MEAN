import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { EditBlogComponent } from './pages/edit-blog/edit-blog.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', component:WelcomePageComponent },
  {path: 'login', component:LoginPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  {path: 'new_blog', component: NewBlogComponent},
  {path: 'blogs', component: BlogPageComponent},
  {path: 'blogs/:blogId', component: BlogPageComponent},
  {path: 'blogs/:blogId/edit', component: EditBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
