import { Component, Input } from '@angular/core';
import { DriverRequest, initialDriverRequest } from '../../models/driver';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
})
export class CreateDriverComponent {
  @Input() initialDriver: DriverRequest = initialDriverRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
