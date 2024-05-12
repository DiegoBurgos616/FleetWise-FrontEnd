import { Component, Input } from '@angular/core';
import { User, initialUserState } from '../../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent {
  @Input() userData: Partial<User> = initialUserState;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  userDataForm: FormGroup = new FormGroup({
    email: new FormControl(this.userData.email, [Validators.required]),
    password: new FormControl(this.userData.password, [Validators.required]),
    invitationCode: new FormControl(this.userData.invitationCode, [Validators.required]),
   
  });

  ngOnInit(): void {
    Object.assign(this.userData, initialUserState);
  }

  ngOnDestroy(): void {
    Object.assign(this.userData, initialUserState);
  }

  update(): void {
    const userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService
      .updateOne(userId, this.userData)
      .subscribe();
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
