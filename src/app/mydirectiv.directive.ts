import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirectiv]'
})
export class MydirectivDirective {

@HostListener('click')
  public onClick(event :any):void{
    if(this.el.nativeElement.localName === 'img'){
      this.el.nativeElement.style.border = '2px solid red';
    }else this.el.nativeElement.style.color = 'red';
    
  }


  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = '300ms liner';
   }

}
