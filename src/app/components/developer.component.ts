import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Developer } from '../developer.model';
import { from } from 'rxjs';
@Component({
    selector: 'app-product',
    templateUrl: './developer.component.html',
    styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {

    @Input() developer: Developer;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    
    addCart(){
        console.log(' añadir al carrito');
        this.productClicked.emit(this.developer.id);
    }

}