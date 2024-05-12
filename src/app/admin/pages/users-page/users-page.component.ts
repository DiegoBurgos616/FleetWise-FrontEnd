import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAll().subscribe((res) => {
      this.users = res;
    });
  }

  delete(userId?: string): void {
    const id = Number(userId);
    this.userService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/users'])))
      .subscribe((res) => this.getAllUsers());
  }
}
