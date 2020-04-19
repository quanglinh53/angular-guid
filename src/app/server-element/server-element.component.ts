import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  //Custom Properties
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  // For Angular 8-
  // @ViewChild('heading') header: ElementRef;
  // @ContentChild('contentParagraph') paragraph: ElementRef;
  // For Angular 8+
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');

  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('textContent1', this.header.nativeElement.textContent);
    console.log('text content of paragraph1', this.paragraph.nativeElement.textContent);
  }

  // call when Properties change
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('text content of paragraph2', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('textContent2', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}
