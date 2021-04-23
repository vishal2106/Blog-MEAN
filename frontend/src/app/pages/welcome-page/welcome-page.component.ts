import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  blogs!: Blog[];
  selectedBlog!: Blog;

  selectedBlogId!: string;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
        this.blogService.getBlogs().subscribe((response: any) => {
          this.blogs = response;
        })
      }
  }
