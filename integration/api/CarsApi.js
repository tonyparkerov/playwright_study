import { request } from '@playwright/test';

class CarsApi {
    async setApiContext() {
        this.apiContext = await request.newContext({
            storageState: 'state.json'
        });
    }

    async createCar(car) {
        try {
            const response = await this.apiContext.post('/api/cars', {
                data: {
                    carBrandId: car.carBrandId,
                    carModelId: car.carModelId,
                    mileage: car.mileage
                }
              });
            return response;
        } catch (error) {
            console.log('Request failed:', error);
            throw error;
        }      
    }
}

export const carsApi = new CarsApi()