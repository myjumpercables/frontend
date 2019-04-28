export class Service {
    constructor(id, subject, description, date = new Date()) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.date = date;
    }
}