export class Service {
    constructor(subject, text, make, date = new Date()) {
        this.subject = subject;
        this.text = text;
        this.make = make;
        this.date = date;
    }
}