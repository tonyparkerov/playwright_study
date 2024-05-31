export default class User {
    constructor(name, lastName, email, password, repeatPassword = password) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.repeatPassword = repeatPassword;
    }
}