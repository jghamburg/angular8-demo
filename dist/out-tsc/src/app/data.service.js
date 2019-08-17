import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let DataService = class DataService {
    constructor() { }
    createDb() {
        const products = [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
            { id: 3, name: 'Product 3' },
            { id: 4, name: 'Product 4' },
            { id: 5, name: 'Product 5' }
        ];
        return { products };
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map