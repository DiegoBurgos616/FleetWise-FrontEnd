import { Component, Input } from '@angular/core';
import { UserRequest, initialUserRequest, initialUserState } from '../../models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  @Input() initialUser: UserRequest = initialUserRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
