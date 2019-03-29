import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClient) {
    }

    getItems() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    }
}