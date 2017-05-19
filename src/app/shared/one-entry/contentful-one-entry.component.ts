import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './contentful-one-entry.component.html',
  styleUrls: ['../../../css/clean-blog.min.css',
  '../../../css/clean-blog.css']
})
export class ContentfulOneEntryComponent {
  
  @Input() public data: any 

}
