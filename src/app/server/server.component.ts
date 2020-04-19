import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './app-server.component.html'
})
export class ServerComponent{
    serverID: number = 10;
    serverStt: string = 'offline';
}