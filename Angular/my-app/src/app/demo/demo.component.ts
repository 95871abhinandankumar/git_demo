import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  demoData : string = 'Demo Data';

  showAlert(){
    alert("Hello from Angular");
    this.demoData = 'some updated data';
  }
}
