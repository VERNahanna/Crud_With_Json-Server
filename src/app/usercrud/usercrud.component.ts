import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';

import { userModel } from '../modules/userCrud.model';
import { MatTableDataSource } from '@angular/material/table';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-usercrud',
  templateUrl: './usercrud.component.html',
  styleUrls: ['./usercrud.component.scss']
})
export class UsercrudComponent implements OnInit {
  // :userModel
  formSubmitted =false;
UsermodelObj = new userModel();
 formValue !:FormGroup
  userData !: any;
  showAdd!:boolean;
  showUpdate!:boolean;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','dbOfBirth','phoneNumber','gender','Action'];
  dataSource = new MatTableDataSource;
  constructor(private formbuliber:FormBuilder,
    private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuliber.group({
      firstName: ['', Validators.required,Validators.pattern('[a-zA-Z]*')],
      lastName: ['', Validators.required,Validators.pattern('[a-zA-Z]*')],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      dbOfBirth:['',Validators.required],
      phoneNumber:['',Validators.required,Validators.pattern('[0-9]*')],

    })
this.getAllUsers();

  }
clickAddUser(){
  this.formValue.reset();
  this.showAdd =true;
  this.showUpdate =false;
}
  postUserDetails(){
    this.UsermodelObj.firstName = this.formValue.value.firstName;
    this.UsermodelObj.lastName = this.formValue.value.lastName;
    this.UsermodelObj.email= this.formValue.value.email;
    this.UsermodelObj.dbOfBirth=this.formValue.value.dbOfBirth;
    this.UsermodelObj.phoneNumber=this.formValue.value.phoneNumber;
    this.UsermodelObj.gender=this.formValue.value.gender;

    this.api.postUser(this.UsermodelObj)
.subscribe(res => {
        console.log(res);
        alert('added sucefully');
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllUsers();
      },
      err=>{
        alert('can\'t added')
      }
      );

  }

  getAllUsers(){
    this.api.getUser().subscribe(res=>{
      this.userData=res;
    })
  }
  deleteUser(row:any){
    this.api.deleteUser(row.id).subscribe(res=>{
      alert('row deleted');
      this.getAllUsers();
    })
  }

  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.UsermodelObj.id=row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['dbOfBirth'].setValue(row.dbOfBirth);
    this.formValue.controls['phoneNumber'].setValue(row.phoneNumber);
    this.formValue.controls['gender'].setValue(row.gender);
  }
  updateUserDetails(){

    this.UsermodelObj.firstName = this.formValue.value.firstName;
    this.UsermodelObj.lastName = this.formValue.value.lastName;
    this.UsermodelObj.email= this.formValue.value.email;
    this.UsermodelObj.dbOfBirth=this.formValue.value.dbOfBirth;
    this.UsermodelObj.phoneNumber=this.formValue.value.phoneNumber;
    this.UsermodelObj.gender=this.formValue.value.gender;

    this.api.updateUser(this.UsermodelObj,this.UsermodelObj.id)
    .subscribe(res=>{
      alert('update sucefully');
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllUsers();
      },
      err=>{
        alert('can\'t added')


    })
  }
  formSubmit() {
    this.formSubmitted = true;
    if(this.formValue.valid){
      alert("Form Submitted");
    }
  }
}
