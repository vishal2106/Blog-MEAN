import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/blog.model'
@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewBlog(title: string, description: string) {
    this.blogService.createBlog(title, description).subscribe((blog: any)=>{
      console.log(blog)
      this.router.navigate([ '/blogs', blog._id ])
    })
  }
  
}
