import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './contentful-one-entry.component.html',
  styleUrls: ['./contentful-one-entry.component.css'],
})
export class ContentfulOneEntryComponent {
  
  @Input() public data: any 

}
