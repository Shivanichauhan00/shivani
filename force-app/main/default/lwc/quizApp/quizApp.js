import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    correctAnswers=0
    isSubmitted = false

    get isScoredFUll(){
        return `slds-text-heading_large ${this.questionList.length === this.correctAnswers?
                    'slds-text-color_success': 'slds-text-color_error'}`
    }

    selectedAns = {}

    get notAllSelected(){
        return !(Object.keys(this.selectedAns).length === this.questionList.length)
    }

    questionList= [
        {
            id : "Question1",
            question : "Which is not a template Looping.",
            answers: {
                a : "iterator Loop",
                b : "for:each loop",
                c : "map Loop"
            },
            correctAnswer : "c"
        },
        {
            id : "Question2",
            question : "Which of the file is invalid in LWC Component",
            answers: {
                a : ".svg",
                b : ".apex",
                c : ".js"
            },
            correctAnswer : "b"
        },
        {
            id : "Question3",
            question : "Which of the following is not a directive",
            answers: {
                a : "iterator",
                b : "for:each",
                c : "@track"
            },
            correctAnswer : "c"
        },
        
    ]

    onChnageHandler(event){
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const{name, value} = event.target;
        this.selectedAns = {...this.selectedAns, [name]: value}
    }

    
    submitHandler(event){
        event.preventDefault();
        const correct = this.questionList.filter(item=>this.selectedAns[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length;
        this.isSubmitted= true;
        console.log(this.correctAnswers);
    }

    resetHandler(){
        this.selectedAns = {}
        this.correctAnswers=0
    }

}