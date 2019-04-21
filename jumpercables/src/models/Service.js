export class Service {
    constructor(subject, text, date = new Date()) {
        this.subject = subject;
        this.text = text;
        this.date = date;
    }
}