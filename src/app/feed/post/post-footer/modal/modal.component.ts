import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

@Output() modalClose = new EventEmitter()
@Output() comment = new EventEmitter<object>()

autor!:string
text!:string
newComment!:object
  constructor() { }

  ngOnInit(): void {
  }


  sendData(object:object){
   this.comment.emit(object)
  }

  modalFunc(){
    this.newComment = {
      id:6,
      sex:'man',
      autor:this.autor,
      text:this.text,
    }

    this.modalClose.emit();

    if(this.autor && this.comment)
    this.sendData(this.newComment)
  }

}
