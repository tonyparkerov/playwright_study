import User from "./models/user-model";
import { emailGenerator } from "../utils/utils";
import {faker} from "@faker-js/faker";

export const randUser = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password()
);

export const userWithEmptyName = new User(
    "",
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password()
);

export const userWithTooLongName = new User(
    faker.string.alpha(22),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password()
);

export const userWithEmptyLastName = new User(
    faker.person.firstName(),
    "",
    emailGenerator(7),
    faker.internet.password()
);

export const userWithTooLongLastName = new User(
    faker.person.firstName(),
    faker.string.alpha(22),
    emailGenerator(7),
    faker.internet.password()
);

export const userWithEmptyEmail = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    "",
    faker.internet.password()
);

export const userWithInvalidEmail = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    faker.string.alpha(22),
    faker.internet.password()
); 

export const userWithTooShortPassword = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password({ length: 5 })
); 

export const userWithTooLongPassword = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password({ length: 30 })
); 

export const userWithDiffRepeatPassword = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password(),
    faker.internet.password()
);

export const userWithEmptyRepeatPassword = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    emailGenerator(7),
    faker.internet.password(),
    ""
);