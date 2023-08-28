import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers: [SearchService],
})
export class GithubSearchComponent {
  search = new FormControl();

  constructor(private searchService: SearchService) {}
  ngOnChanges(): void {
    console.log('data changes');
  }

  ngOnInit(): void {
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
