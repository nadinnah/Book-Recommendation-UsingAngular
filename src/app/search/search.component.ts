import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) { // Access 'searchTerm' using bracket notation
        this.searchTerm = params['searchTerm'];
      }
    });
  }

  search(): void {
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
    }
  }
}