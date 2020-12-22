import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts = [
    {
      title:'Title 1',
      imgUrl:'http://placeimg.com/600/200/any',
      like:10,
      comments:[{
        id:1,
        autor:'autor 1',
        text:'Text example 1'
      },
      {
        id:2,
        autor:'autor 2',
        text:'Text example 2'
      },
      {
        id:3,
        autor:'autor 3',
        text:'Text example 3'
      },
      {
        id:4,
        autor:'autor 4',
        text:'Text example 4'
      },
      {
        id:5,
        autor:'autor 5',
        text:'Text example 5'
      },
    ]
    },
    {
      title:'Title 2',
      imgUrl:'http://placeimg.com/600/200/any',
      like:100,
      comments:[{
        id:1,
        autor:'autor 1',
        text:'Text example 1'
      },
      {
        id:2,
        autor:'autor 2',
        text:'Text example 2'
      },
      {
        id:3,
        autor:'autor 3',
        text:'Text example 3'
      },
      {
        id:4,
        autor:'autor 4',
        text:'Text example 4'
      },
      {
        id:5,
        autor:'autor 5',
        text:'Text example 5'
      },
    ]
    },
    {
      title:'Title 3',
      imgUrl:'http://placeimg.com/600/200/any',
      like:1000,
      comments:[{
        id:1,
        autor:'autor 1',
        text:'Text example 1'
      },
      {
        id:2,
        autor:'autor 2',
        text:'Text example 2'
      },
      {
        id:3,
        autor:'autor 3',
        text:'Text example 3'
      },
      {
        id:4,
        autor:'autor 4',
        text:'Text example 4'
      },
      {
        id:5,
        autor:'autor 5',
        text:'Text example 5'
      },
    ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
