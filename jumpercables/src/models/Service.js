export class Service {
    constructor(id, subject, description, date = new Date(), repairs) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.date = date;
        this.repairs = repairs;
    }
}