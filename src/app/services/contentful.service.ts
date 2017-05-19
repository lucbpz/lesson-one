import { Config } from './../config/config'
import { Http } from '@angular/http'
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs/Rx'

@Injectable()
export class ContentfulService {
    apiUrl: string;
    apiKey: string;    

    public constructor(private http: Http) {
        this.apiUrl = `${Config.API_URL}/spaces/${Config.SPACE_ID}`;
        this.apiKey = Config.API_KEY;
    }

    getEntryById(id: string): Observable<any> {
        const query = `/entries/${id}`;
        const url = `${this.apiUrl}${query}?access_token=${this.apiKey}`;
        console.log(url);
        return this.http.get(url);
    }

    getEntryBySlug(slug: string, contentType: string): Observable<any> {
        const query = `/entries?access_token=${this.apiKey}&content_type=${contentType}&fields.slug=${slug}`;
        const url = `${this.apiUrl}${query}&limit=1`;
        return this.http.get(url);
    }

    getEntries(): Observable<any> {
        const query = `/entries?access_token=${this.apiKey}`;
        const url = `${this.apiUrl}${query}`;
        return this.http.get(url);
    }
}