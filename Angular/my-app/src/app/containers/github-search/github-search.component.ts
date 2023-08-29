import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers: [SearchService],
})
export class GithubSearchComponent implements OnInit {
  search = new FormControl();

  constructor(
    private searchService: SearchService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnChanges(): void {
    console.log('data changes');
  }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((par) => {
      if (par.has('q')) {
        this.search.setValue(par.get('q'));
        this.getRepos(par.get('q') as string);
      }
    });
    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => this.searchService.searchRepos(value))

        //best practice to call function call in service provider where the data is fetched. to filter the data.
        // map((value: any) => value.items)
      )
      .subscribe((value) => {
        console.log(value);
        this.router.navigate([], { queryParams: { q: this.search.value } });
        //No need to call as switch map will call the api and will handle to reduce waiting time of api call from client side.
        // this.getRepos(value);
      });
  }

  getRepos(querry: string) {
    this.searchService.searchRepos(querry).subscribe(
      (data) => {
        console.log('sucsess : ', data);
      },
      (err) => {
        console.log('failure : ', err);
      }
    );
  }
}
