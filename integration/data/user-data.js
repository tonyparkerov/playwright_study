import User from "./models/user-model";
import { emailGenerator } from "../utils/utils";
import {faker} from "@faker-js/faker";

const randUser = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password()
);

const userWithEmptyName = new User(
    "",
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password()
);

const userWithTooLongName = new User(
    faker.string.alpha(22),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password()
);

const userWithEmptyLastName = new User(
    faker.person.firstName(),
    "",
    emailGenerator(7),
    faker.internet.password()
);

const userWithTooLongLastName = new User(
    faker.person.firstName(),
    faker.string.alpha(22),
    emailGenerator(7),
    faker.internet.password()
);

const userWithEmptyEmail = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    "",
    faker.internet.password()
);

const userWithInvalidEmail = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    faker.string.alpha(22),
    faker.internet.password()
); 

const userWithTooShortPassword = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password({ length: 5 })
); 

const userWithTooLongPassword = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password({ length: 30 })
); 

const userWithDiffRepeatPassword = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password(),
    faker.internet.password()
);

const userWithEmptyRepeatPassword = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password(),
    ""
);

export const users = {
    randUser: randUser,
    userWithEmptyName: userWithEmptyName,
    userWithTooLongName: userWithTooLongName,
    userWithEmptyLastName: userWithEmptyLastName,
    userWithTooLongLastName: userWithTooLongLastName,
    userWithEmptyEmail: userWithEmptyEmail,
    userWithInvalidEmail: userWithInvalidEmail,
    userWithTooShortPassword: userWithTooShortPassword,
    userWithTooLongPassword: userWithTooLongPassword,
    userWithDiffRepeatPassword: userWithDiffRepeatPassword,
    userWithEmptyRepeatPassword: userWithEmptyRepeatPassword
}