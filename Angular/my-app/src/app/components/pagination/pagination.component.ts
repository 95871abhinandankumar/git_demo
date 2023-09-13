import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  totalPage: number = 5;
  currentPage: number = 1;
  router = inject(Router);
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((object) => {
      this.currentPage =
        object.has('page') && /^\d+$/.test(object.get('page') as string)
          ? parseInt(object.get('page') as string)
          : 1;
    });
  }
  updatePage(pageNo: number) {
    // this.router.navigate(['/'], { queryParams: { sort: ele.innerText } });
    // for (let i = 0; i < this.totalPage; i++) {
    //   let ele = document.getElementById('page' + i)?.parentElement;
    //   if (ele && ele.classList.contains('active'))
    //     ele.classList.remove('active');
    // }
    // let ele = document.getElementById('page' + pageNo)?.parentElement;
    // if (ele && ele.classList.contains('active')) ele.classList.add('active');

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: pageNo,
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false,
      // do not trigger navigation
    });
    let ele = document.getElementById('page' + pageNo)?.parentElement;
    if (ele && ele.classList.contains('active')) ele.classList.add('active');
  }
  nextPage() {
    if (this.currentPage < 5) {
      this.updatePage(this.currentPage + 1);
    } else {
      this.updatePage(1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.updatePage(this.currentPage - 1);
    } else {
      this.updatePage(5);
    }
  }
}
