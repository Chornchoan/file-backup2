import { Vehicle } from "./Vehicle";

export class TucTuc extends Vehicle {
    private numberCustomers: number;
  
    constructor(weight: number, plateID: string, numberCustomers: number) {
      super(weight, plateID);
      this.numberCustomers = numberCustomers;
    }
  
    public getNumberCustomers(): number {
      return this.numberCustomers;
    }
  
    public getSpeed(): number {
      let speed = 130;
      speed -= this.numberCustomers * 5;
      return speed;
    }
  }