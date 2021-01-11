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
    console.log(this.commentFooter)
  }

  hideComment(){
this.showComment = !this.showComment
  }

  comment(object:object){
    console.log('From parrent',object)
    this.commentFooter.push(object)
  }


toggleModal(){
  this.showModal = !this.showModal
  if(this.showModal){
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = 17 + 'px'
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''

  } 
}

}
