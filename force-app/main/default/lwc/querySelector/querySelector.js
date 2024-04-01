import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    fetchAllDetails(){
       const elem = this.template.querySelector('h1');
       console.log(elem.innerText); 
    }
}