export class Service {
    constructor(id, subject, text, date = new Date(), repair) {
        this.id = id;
        this.subject = subject;
        this.text = text;
        this.date = date;
        this.repair = repair
    }
}