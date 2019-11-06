import {Component} from '@angular/core';

import { Developer} from './developer.model';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'prueba-front';

	items = ['Fernando', 'Gilberto', ' Carlos', 'Juan', 'Luis'];

	developer: Developer[] = [
	 {
		id:'1',
		image: 'https://picsum.photos/seed/picsum/300/300',
		name: 'Fernando',
		age: '30',
		job: 'front-end'
	 },
	 {
		id:'2',
		image: 'https://picsum.photos/seed/picsum/300/300',
		name: 'Gilberto',
		age: '25',
		job: 'Back-end'
	 },
	 {
		id:'3',
		image: 'https://picsum.photos/seed/picsum/300/300',
		name: 'Juan Carlos',
		age: '27',
		job: 'full-stack'
	 },
	 {
		id:'4',
		image: 'https://picsum.photos/seed/picsum/300/300',
		name: 'Carlos Eduardo',
		age: '34',
		job: 'full-stack'
	 },
	 {
		id:'5',
		image: 'https://picsum.photos/seed/picsum/300/300',
		name: 'Luis Garibi',
		age: '37',
		job: 'SEO'
	 },
	]

	addItem(){
		this.items.push('nuevo item');
	}
	deleteItem(index: number ){
		this.items.splice(index, 1);
	}
	clickProduct(id:number){
		console.log('product');
		console.log(id);
	}

}
