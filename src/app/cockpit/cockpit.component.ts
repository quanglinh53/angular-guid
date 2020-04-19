import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput;
  //For Angular 8
  // @ViewChild('serverContentInput', {static: true}) serverContentInput;

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddBlueprint() {
  //   this.bluePrintCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
