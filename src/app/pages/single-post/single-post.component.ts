import { Component, Input } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Router, ActivatedRoute } from "@angular/router";
import { DisqusModule } from 'angular2-disqus';

@Component({
    selector: 'single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['../../../css/clean-blog.min.css',
        '../../../css/clean-blog.css']
})
export class SinglePostComponent {

    data: any[];
    pageIdentifier: String;
    pageUrl: String;

    constructor(private api: ContentfulService, private router: Router, private activatedRoute: ActivatedRoute, private disqus: DisqusModule) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            console.log("params", params);
            if (params['id']) {
                this.api.getEntryById(params['id']).subscribe((data: any) => {
                    this.data = data.json();
                    this.pageIdentifier = params['id'];
                    this.pageUrl = "entry/"+params['id'];
                    console.log(this.data);
                });
            }
        });
    }

}