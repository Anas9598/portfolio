import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDocument } from './in-memory-db';

@Injectable({
    providedIn: 'root'
})
export class AppHttpService {
    SERVER_URL = 'api/documentList';
    constructor(private httpService: HttpClient) {
    }

    getAllDocuments() {
        return this.httpService.get(this.SERVER_URL);
    }
}