import { Component, OnInit } from '@angular/core';
import { WikipediaService } from 'src/app/services/wikipedia.service';

@Component({
  selector: 'app-wiki-search-home',
  templateUrl: './wiki-search-home.component.html',
  styleUrls: ['./wiki-search-home.component.css']
})
export class WikiSearchHomeComponent implements OnInit {

  // putting wikipedia in constructor parameter is going to be the same as
  // wikipedia: WikipediaService; 
  // this.wikipedia = new WikipediaService(); -- in constructor
  // but we prefer the constructor method because it uses the 
  // dependency injection service angular offers 
  // @Injectible defines the class or service as dependency injectable
  // it will only create one instance of the service/class and inject as needed
  // if we do it manually in constructor using new WikipediaService()
  // we're creating a new instance each time
  // one of the main benefits of using dependency injection is to make testing easier
  // because then we can mock the service instead of calling the real service
  constructor(private wikipedia: WikipediaService) { }

  pages = [];

  ngOnInit(): void {
  }

  // we know the event coming in would be a string that represents a term
  onTerm(term: string) {
    // retrieve an observable
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
      // console.log(this.pages);
    });
  }

}
