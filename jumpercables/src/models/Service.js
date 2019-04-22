export class Service {
    constructor(id, subject, text, date = new Date()) {
        this.id = id;
        this.subject = subject;
        this.text = text;
        this.date = date;
    }
}