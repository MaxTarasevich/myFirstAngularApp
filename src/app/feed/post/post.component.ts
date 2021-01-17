import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title:any
  @Input() imgUrl:any
  @Input() id:any
  @Input() index:any
 

  constructor() { }

  ngOnInit(): void {
  
}
}
