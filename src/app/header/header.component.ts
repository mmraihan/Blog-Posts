import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndServive: BackEndService) { }

  ngOnInit(): void {
    this.onFetch();
  }

  onSave(){
    console.log("working")
    this.backEndServive.savaData();
  }

  onFetch(){
    console.log("On Fetch ")
    this.backEndServive.fetchData();
  }

}
