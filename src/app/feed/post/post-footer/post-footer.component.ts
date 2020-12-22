import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.scss']
})
export class PostFooterComponent implements OnInit {

showComment = true
showModal = false

 @Input() commentFooter:any
  constructor() { }

  ngOnInit(): void {
  }

  hideComment(){
this,this.showComment = !this.showComment
  }

toggleModal(){
  this.showModal = !this.showModal
}

}
