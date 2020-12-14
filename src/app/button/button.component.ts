import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
 
})
export class ButtonComponent implements OnInit {
  buttonValue = 'Button'
  constructor() { }

  ngOnInit(): void {
  }
  alert(): void {
    alert('Child compoent button was pressed')
  }
}
