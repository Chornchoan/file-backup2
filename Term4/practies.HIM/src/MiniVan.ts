import { Vehicle } from "./Vehicle";

export class MiniVan extends Vehicle {
    private numberCustomers: number;
    private numberLuggage: number;
  
    constructor(weight: number, plateID: string, numberCustomers: number, numberLuggage: number) {
      super(weight, plateID);
      this.numberCustomers = numberCustomers;
      this.numberLuggage = numberLuggage;
    }
  
    public getNumberCustomers(): number {
      return this.numberCustomers;
    }
  
    public getNumberLuggage(): number {
      return this.numberLuggage;
    }
  
    public getSpeed(): number {
      let speed = 130;
      speed -= this.numberCustomers * 10;
      speed -= this.numberLuggage * 5;
      return speed;
    }
  }
  