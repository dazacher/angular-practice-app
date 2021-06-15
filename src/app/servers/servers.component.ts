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
  serverCreationStatus = 'No server was created!'
  serverName = 'Test Server';
  userName = '';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  displayData = false;
  buttonClicksLog = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDisplay(){
    this.displayData = !this.displayData;
    // this.buttonClicksLog.push(this.buttonClicksLog.length + 1);
    this.buttonClicksLog.push(new Date());
  }
}
