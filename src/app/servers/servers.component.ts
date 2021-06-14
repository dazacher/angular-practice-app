import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //making it an attribute instead of a selector
  //selector: '[app-servers]',
  //making the selector a class
  //selector: '.app-servers',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
