import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?: Post; //receiving data from App-list-Component
  @Input() index: number=0;
  memberName="Sam";

  constructor(private postService: PostService) { } //Copnnecting component with service

  ngOnInit(): void {
    console.log(this.post)
  }
  onDelete(){
   this.postService.deletePost(this.index);
  }


}
