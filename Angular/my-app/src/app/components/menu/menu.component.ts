import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  router = inject(Router);
  updateQuery(event: Event) {
    const ele = event.target as HTMLInputElement;
    this.router.navigate(['/'], { queryParams: { search: ele.value } });
  }
}
