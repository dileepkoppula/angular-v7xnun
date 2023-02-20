import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userList: any[] = [];
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    mob: new FormControl(''),
    company: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    pswd: new FormControl(''),
    cpswd: new FormControl(''),
  });
  userDetails: any;

  addUser() {
    this.userForm.reset();
  }

  editUser(user: any) {
    this.userForm.patchValue({
      firstName:user.firstName,
      lastName:user.lastName,
      mail:user.mail,
      mob:user.mob,
      company:user.company,
      gender:user.gender,
      dob:user.dob,
      pswd:user.pswd,
      cpswd:user.cpswd
    })
  }

  deleteUser(id: any) {
    this.userList.splice(1,id)
  }

  saveUser() {
    console.log(this.userForm.value);
    // localStorage.setItem('form-data', JSON.stringify(this.userForm.value));
    // this.userDetails = localStorage.getItem('form-data');
    // console.log(JSON.parse(this.userDetails));
    this.userList.push(this.userForm.value);
    this.userForm.reset();
  }
  clear() {
    this.userForm.reset();
  }
}
