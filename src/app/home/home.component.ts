import { Config } from '../config/config'
import { Component } from '@angular/core'
import { ContentfulService } from "app/services/contentful.service";
import { ListPostComponent } from "app/pages/list-post/list-post.component";

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
})

export class HomeComponent {
    constructor(private listPost: ListPostComponent) { }

    // ngOnInit() {
    //     const slug = Config.HOME_SLUG;
    //     const contentType = Config.STANDARD_CONTENT;

    //     this.api.getEntryBySlug(slug, contentType).subscribe((r: any) => {
    //         const response = r.json();
    //     });

    // }

    ngOnInit() {
        // this.api.getEntries().subscribe( (data: any) => {
        //     this.posts = data.json();
        //     console.log(this.posts);
        // });
        console.log(this.listPost.posts);

    }

}