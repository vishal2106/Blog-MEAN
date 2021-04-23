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

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

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
}
