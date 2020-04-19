import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //for atribute
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowCreationStatus = 'No server was created!';
  serverName = 'Test';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateSever(){
    this.allowCreationStatus = 'Server was created! Name is ' + this.serverName;
    setTimeout(() => {
      this.allowCreationStatus = 'No server was created!';
    }, 2000);
  }

  // onUpdateServerName(event: any){
    // this.serverName = event.target.value;
  // }

}
