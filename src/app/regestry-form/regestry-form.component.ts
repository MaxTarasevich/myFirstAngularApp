import { Component, OnInit } from '@angular/core';
import { ToLocalStorageService } from '../to-local-storage.service';

@Component({
  selector: 'app-regestry-form',
  templateUrl: './regestry-form.component.html',
  styleUrls: ['./regestry-form.component.scss']
})
export class RegestryFormComponent implements OnInit {


  loginName!:any
  password!:any



  constructor(private LocStor:ToLocalStorageService) { }

  ngOnInit(): void {
  }

  logIn(){
    this.LocStor.setToLocalStorage(`login${this.loginName}`,this.password)
    
  }

}
