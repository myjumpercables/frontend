class User {
    constructor(id, username, cars, hasAccess = true) {
        this.id = id;
        this.username = username;
        this.cars = cars;
        this.hasAccess = hasAccess;
    }
}

export default User;