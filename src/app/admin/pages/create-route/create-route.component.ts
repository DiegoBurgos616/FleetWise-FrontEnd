import { Component, Input } from '@angular/core';
import { RouteRequest, initialRouteRequest } from '../../models/route';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
})
export class CreateRouteComponent {
  @Input() initialRoute: RouteRequest = initialRouteRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
