import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';

@Injectable({ providedIn: 'root' })
export class BackEndService {

constructor(private postService: PostService){

}

  // Fun 1 - Save
  savaData() {
    //Step 1.1- Get list of posts from post.service.ts

    const listOfPosts: Post[]= this.postService.getPosts();





    //Step 1.2- Send list of posts to BackEnd
  }

  // Fun 2 - Save
}
