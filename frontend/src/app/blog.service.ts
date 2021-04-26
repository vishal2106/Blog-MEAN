import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private webReqService: WebRequestService) { }

  getBlogs(){
    return this.webReqService.get('blogs');
  }

  getBlog(blogId: string){
    return this.webReqService.getOne(`blogs/${blogId}`);
  }

  createBlog(title: string, description: string) {
    console.log('inside create blog')
    return this.webReqService.post('blogs', { title, description });
  }

  updateBlog(blogId: string, title: string, description: string) {
    return this.webReqService.put(`blogs/${blogId}`, { title, description });
  }

  deleteBlog(blogId: string) {
    console.log('inside service')
    return this.webReqService.delete(`blogs/${blogId}`);
  }

}
