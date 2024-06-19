import { expect } from "playwright/test";
import { getResponse } from "../utils/utils";

class ApiValidator {
    async verifyCreateCarResponse(response, car) {
        const responseBody = await getResponse(response);
        expect(responseBody.data.carBrandId).toBe(car.carBrandId);
        expect(responseBody.data.carModelId).toBe(car.carModelId);
        expect(responseBody.data.mileage).toBe(car.mileage);
        expect(responseBody.data.brand).toBe(car.brand);
        expect(responseBody.data.model).toBe(car.model);
    }

    async verifyCarInvalidBrandId(response) {
        const responseBody = await getResponse(response);
        expect(responseBody.status).toBe('error');
        expect(responseBody.message).toBe('Brand not found');
    }

    async verifyCarInvalidModelId(response) {
        const responseBody = await getResponse(response);
        expect(responseBody.status).toBe('error');
        expect(responseBody.message).toBe('Model not found');
    }
}

export const apiValidator = new ApiValidator();