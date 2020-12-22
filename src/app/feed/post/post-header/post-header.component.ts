import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {

  @Input() titleHeader: any;
  @Input() urlHeader: any;
  constructor() { }

  ngOnInit(): void {
  }

}
