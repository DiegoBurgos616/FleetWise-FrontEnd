import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, initialUserState } from '../../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent {
  @Input() userEditable: User = initialUserState;
  constructor(
    private userService: UserService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.userService.getOne(userId).subscribe((res) => {
      this.userEditable = res;
    });
  }

}
