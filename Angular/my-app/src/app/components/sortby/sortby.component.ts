import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css'],
})
export class SortbyComponent {
  router = inject(Router);
  constructor(private activatedRoute: ActivatedRoute) {}
  updateQuery(event: Event) {
    const ele = event.target as HTMLInputElement;
    // this.router.navigate(['/'], { queryParams: { sort: ele.innerText } });
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        sort: ele.innerText,
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false,
      // do not trigger navigation
    });
  }
}
