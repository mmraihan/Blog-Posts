import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[]=[
   new Post(
    'Pizza',
    'qqqqqqqqqqqqqqqq',
  'https://www.probash-mela.com/wp-content/uploads/2018/09/pizza.jpg',
  'raihan@test.com',
   new Date()
    ),
    new Post(
      'Pizza2',
      'qqqqqqqqqqqqqqqq',
    'https://www.probash-mela.com/wp-content/uploads/2018/09/pizza.jpg',
    'raihan@test.com',
     new Date()
      ),  
      new Post(
        'Pizza3',
        'qqqqqqqqqqqqqqqq',
      'https://www.probash-mela.com/wp-content/uploads/2018/09/pizza.jpg',
      'raihan@test.com',
       new Date()
        ),
 
];

  constructor() { }

  ngOnInit(): void {
  }

}
