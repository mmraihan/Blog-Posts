import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

/*
Database Path  
https://blog-posts-86997-default-rtdb.firebaseio.com/

*/

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}


                               // Fun 1 - Save
  savaData() {
    //Step 1.1- Get list of posts from post.service.ts
    const listOfPosts: Post[] = this.postService.getPosts();

    //Step 1.2- Send list of posts to BackEnd
    this.http.put(
      'https://blog-posts-86997-default-rtdb.firebaseio.com/posts.json',
      listOfPosts
    ).subscribe((res)=>{
        console.log(res);
    });
  }


                                 // Func 2 - Save

  fetchData(){

  // Step 2.1-  Receiving data from Backend To back-end.service.ts

    this.http.get<Post[]>(
    'https://blog-posts-86997-default-rtdb.firebaseio.com/posts.json'
      ).pipe(
      tap((listOfPosts: Post[])=>{
        console.log(listOfPosts);


  //Step 2.2-  Sendind Data from backe-end.service.ts To post.service.ts
      })
    ).subscribe();
  }

}
