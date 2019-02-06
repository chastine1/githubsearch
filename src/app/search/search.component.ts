import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from '../search'


import {SearchRequestService} from '../search-http/search-request.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[SearchRequestService],
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: Search;

  inputName="";

submitRepos(){
this.SearchService.searchRequest(this.inputName)
 console.log(this.inputName)
}

  constructor(private http:HttpClient,private SearchService:SearchRequestService) {
    this.search=new Search("","",0,0,0,"");

  }

    ngOnInit() {
      this.SearchService.searchRequest("chastine1")
     this.search=this.SearchService.search
   }
  
  
  }





 

  


  

