import { Vehicle } from "./Vehicle";

export class VehicleConvoy {
    private vehicles: Vehicle[];
    constructor() {
      this.vehicles = [];
    }
  
    public addVehicle(vehicle: Vehicle): void {
      this.vehicles.push(vehicle);
    }
  
    public getMaxSpeed(): number {
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