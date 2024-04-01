import { LightningElement, track } from 'lwc';

export default class HelloWord01 extends LightningElement {

    fullName = "Shivani Chauhan";
    title = "Admin";

    handleChange(event){
        this.title = event.target.value;
    }

    @track address = {
        city : " New Delhi",
        State : "Delhi",
        Country : "India"
    }
    trackHandler(event){
        this.address.city = event.target.value;
    }

    users = ["Vaibhav", "Shivanaa"]
    get firstUser(){
       return this.users[0];
    } 

    num1=10
    num2 = 20;
    get multiply(){
        return this.num1*this.num2
    }
}