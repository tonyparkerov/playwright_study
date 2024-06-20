import { test, expect } from '@playwright/test';
import { audiTT, carWithInvalidBrandId, carWithInvalidModelId } from '../integration/data/car-data';
import { carsApi } from '../integration/api/CarsApi';
import { apiValidator } from '../integration/api/ApiValidator';

test.describe('API test', () => {

    test.beforeAll(async () => {
        await carsApi.setApiContext();
    })

    test('Check car creating', async () => {
        const response = await carsApi.createCar(audiTT);
        expect(response.status()).toBe(201);
        await apiValidator.verifyCreateCarResponse(response, audiTT)
    });

    test('Try create car with invalid brandId', async () => {
        const response = await carsApi.createCar(carWithInvalidBrandId);
        expect(response.status()).toBe(404);
        await apiValidator.verifyCarInvalidBrandId(response)
    });

    test('Try create car with invalid modelId', async () => {
        const response = await carsApi.createCar(carWithInvalidModelId);
        expect(response.status()).toBe(404);
        await apiValidator.verifyCarInvalidModelId(response)
    });
})