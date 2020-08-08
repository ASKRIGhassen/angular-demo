import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatedStatus = 'No server has been created';
  serverName = 'TestServer';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreatedStatus = 'New server has been created! ' + this.serverName;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  userNameIsEmpty(): boolean {
    return this.userName === '';
  }

  onReset(): void {
    this.userName = '';
  }

}
