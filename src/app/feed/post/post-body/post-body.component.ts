import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {
  @Input()likes:any

  constructor() { }

  ngOnInit(): void {
  
  }

}
