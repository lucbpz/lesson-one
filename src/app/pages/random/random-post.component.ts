import { Component, Input } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DisqusModule } from 'angular2-disqus';

@Component({
    selector: 'random-post',
    templateUrl: './random-post.component.html',
    styleUrls: ['../../../css/clean-blog.min.css',
        '../../../css/clean-blog.css']
})
export class RandomPostComponent {

    data: any[];
    pageIdentifier: String;
    pageUrl: String;

    constructor(private api: ContentfulService, private disqus: DisqusModule) { }

    ngOnInit() {
        this.api.getEntries().subscribe( (data: any) => {
            const posts = data.json().items;
            const randomNumber = Math.floor((Math.random() * posts.length - 1) + 1);
            data = posts[randomNumber];
            console.log(this.data);
        });
    }

}