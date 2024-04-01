import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carList = ["Audi", "BMW", "Maruti","Hyundai", "Mercedes"]

    ceoList = [
        {
            id : 1,
            company : "Google",
            name : "Sunder Pichai"
        },
        {
            id : 2,
            company : "Apple ",
            name : "Tim Cook"
        },
        {
            id : 3,
            company : "Amazon",
            name : "Shivani Chauhan"
        },
        {
            id : 4,
            company : "Microsoft",
            name : "Vaibhav Manchanda"
        }

    ]
}