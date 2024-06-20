import Car from "./models/car-model";
import {faker} from "@faker-js/faker";

export const audiTT = new Car(
    1,
    1,
    faker.number.int({ min: 10, max: 200 }),
    "Audi",
    "TT"
);

export const carWithInvalidBrandId = new Car(
    0,
    1,
    faker.number.int({ min: 10, max: 200 }),
    "Audi",
    "TT"
);

export const carWithInvalidModelId = new Car(
    1,
    0,
    faker.number.int({ min: 10, max: 200 }),
    "Audi",
    "TT"
);