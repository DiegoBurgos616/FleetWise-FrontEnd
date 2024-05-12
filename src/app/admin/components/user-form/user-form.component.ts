import { Component, Input } from '@angular/core';
import { User, UserRequest, initialUserRequest, initialUserState } from '../../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  @Input() userData: UserRequest = initialUserRequest;

  constructor(private userService: UserService, private router: Router) {}

  userDataForm: FormGroup = new FormGroup({
    email: new FormControl(this.userData.email, [Validators.required]),
    password: new FormControl(this.userData.password, [Validators.required]),
    invitationCode: new FormControl(this.userData.invitationCode, [Validators.required]),
   
  });

  ngOnInit(): void {
  }

  create(): void {
    this.userService.create(this.userData).subscribe();
    this.router.navigate(['/admin/users']);
  }

  get email() {
    return this.userDataForm.get('email');
  }

  get password() {
    return this.userDataForm.get('password');
  }

  get invitationCode() {
    return this.userDataForm.get('invitationCode');
  }

}
