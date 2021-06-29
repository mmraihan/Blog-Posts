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
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus asperiores
    accusantium nulla veritatis assumenda! Aperiam tempora vero a. Quo vero
    commodi asperiores eos inventore ipsam obcaecati nihil numquam exercitationem
    perferendis.`,
  'https://www.probash-mela.com/wp-content/uploads/2018/09/pizza.jpg',
  'raihan@test.com',
   new Date()
    ),
    new Post(
      'Indian Dessert',
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus asperiores
    accusantium nulla veritatis assumenda! Aperiam tempora vero a. Quo vero
    commodi asperiores eos inventore ipsam obcaecati nihil numquam exercitationem
    perferendis.`,
    'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'raihan@test.com',
     new Date()
      ),  
      new Post(
        'Butter Burger',
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus asperiores
        accusantium nulla veritatis assumenda! Aperiam tempora vero a. Quo vero
        commodi asperiores eos inventore ipsam obcaecati nihil numquam exercitationem
        perferendis`,
      'https://www.localguidesconnect.com/t5/image/serverpage/image-id/598117iF7081563757AFAF2/image-size/medium?v=v2&px=400',
      'raihan@test.com',
       new Date()
        ),
        new Post(
          'Falooda',
          `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus asperiores
          accusantium nulla veritatis assumenda! Aperiam tempora vero a. Quo vero
          commodi asperiores eos inventore ipsam obcaecati nihil numquam exercitationem
          perferendis`,
        'https://i.pinimg.com/originals/6e/e4/57/6ee4577a27dd1825b4261d511a0422fa.jpg',
        'raihan@test.com',
         new Date()
          ),
          

 
];

  constructor() { }

  ngOnInit(): void {
  }

}
