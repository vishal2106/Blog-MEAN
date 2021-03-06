import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  blogs!: Blog[];
  selectedBlog!: Blog;

  selectedBlogId!: string;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }


  // On initialize of component subscribe to change on params and update blogs value
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.blogId) {
          this.selectedBlogId = params.blogId;
          this.blogService.getBlog(this.selectedBlogId).subscribe((response: any) => {
            this.selectedBlog = response;
          })
        }
        
      })
      this.blogService.getBlogs().subscribe((response: any) => {
        this.blogs = response;
      })
  }

  // Method to delete a blog by calling blogService
  deleteBlog(){
    console.log('Inside fn')
    this.blogService.deleteBlog(this.selectedBlogId).subscribe((res:any)=>{
      console.log(res)
      this.router.navigateByUrl('/')
    })
    
  }
}
