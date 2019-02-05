import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from '../search'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: Search;

  constructor(private http:HttpClient) {
    this.search=new Search("","",0,0,0,"");
  }

  

     
  

  ngOnInit() {


    
    
  }
}

