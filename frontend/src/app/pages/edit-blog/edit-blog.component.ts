import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/blog.model'

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute) { }

  blogId!: string;

  // Update blogID with change on parameter
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.blogId = params.blogId;
      }
    )
  }

  // Method to edit a blog by calling blogService.updateBlog
  editBlog(title: string, description: string) {
    this.blogService.updateBlog(this.blogId, title, description).subscribe((blog: any)=>{
      console.log(blog)
      this.router.navigate([ '/blogs', this.blogId])
    })
  }
}
