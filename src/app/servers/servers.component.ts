import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //making it an attribute instead of a selector
  //selector: '[app-servers]',
  //making the selector a class
  //selector: '.app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

}
