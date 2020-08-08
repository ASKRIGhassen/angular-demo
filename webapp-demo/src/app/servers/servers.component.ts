import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .online{
        color: white
      }
    `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatedStatus = 'No server has been created';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'DevServer'];
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
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
  onClickDisplay(): void {
    this.logs.push(Date.now());
  }


  getColor(index: number): string {
    return index >= 4 ? 'blue' : 'green';
  }

}
