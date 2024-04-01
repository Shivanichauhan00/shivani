import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    //hgdhtd
    fetchAllDetails(){
       const elem = this.template.querySelector('h1');
       console.log(elem.innerText) ; 
    }
}