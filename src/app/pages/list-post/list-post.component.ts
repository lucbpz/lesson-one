import { Component, Input } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';

@Component({
    selector: 'list-post',
    templateUrl: './list-post.component.html',
    styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent {

    posts: any[];

    constructor(private api: ContentfulService) { }

    ngOnInit() {
        this.api.getEntries().subscribe( (data: any) => {
            this.posts = data.json().items;
            console.log(this.posts);
        });
    }
    
}