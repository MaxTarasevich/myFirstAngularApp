import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToLocalStorageService } from '../to-local-storage.service';

@Component({
  selector: 'app-regestry-form',
  templateUrl: './regestry-form.component.html',
  styleUrls: ['./regestry-form.component.scss']
})
export class RegestryFormComponent implements OnInit {


  loginName!:any
 
  myForm : FormGroup;


  constructor(private LocStor:ToLocalStorageService) {
    this.myForm = new FormGroup({
              
      "loginName": new FormControl("", [Validators.required,
                                         Validators.minLength(6)]),
      "password": new FormControl("", [
                          Validators.required, 
                          Validators.minLength(6)
                      ]),
  });
   }

  ngOnInit(): void {
  }

  logIn(){
   this.loginName = this.myForm.value.loginName
   console.log(this.loginName)
   this.LocStor.setToLocalStorage(`login`,this.myForm.value.loginName)
    
  }

}
