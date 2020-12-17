import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

}
