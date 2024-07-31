"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleConvoy = void 0;
class VehicleConvoy {
    constructor() {
        this.vehicles = [];
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    getMaxSpeed() {
        let maxSpeed = 0;
        for (const vehicle of this.vehicles) {
            const speed = vehicle.getSpeed();
            if (speed > maxSpeed) {
                maxSpeed = speed;
            }
        }
        return maxSpeed;
    }
}
exports.VehicleConvoy = VehicleConvoy;
