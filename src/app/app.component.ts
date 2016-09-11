import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dir-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  switch = false;
  items = [1, 2, 3, 4, 5];
  value = 100;
  OnSwitch() {
    this.switch = !this.switch;
  }
}
