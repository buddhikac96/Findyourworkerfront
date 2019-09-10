import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ConfigService {

   baseUrl = 'http://localhost:3000';

    constructor() { }

    getBaseUrl() {
        return this.baseUrl;
    }
}
