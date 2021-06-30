import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private postService: PostService, private router: Router) { } //Copnnecting component with service

  ngOnInit(): void {
    console.log(this.post)
  }
  onDelete(){
   this.postService.deletePost(this.index);
  }
  onEdit(){
    this.router.navigate(['/post-edit', this.index]);

  }


}
