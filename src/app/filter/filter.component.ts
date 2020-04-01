import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output('search') search: EventEmitter<any> = new EventEmitter();
  constructor() { }
  searchValue: String;
  ngOnInit() {
    this.searchValue = "";
  }
  searchClick(){
    //console.log(this.searchValue);
    this.search.emit(this.searchValue);
  }
  

}
