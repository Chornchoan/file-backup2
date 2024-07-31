import { Vehicle } from "./Vehicle";

export class BatMobile extends Vehicle {
    private isBatmanHere: boolean;
  
    constructor(weight: number, plateID: string, isBatmanHere: boolean) {
      super(weight, plateID);
      this.isBatmanHere = isBatmanHere;
    }
  
    public getIsBatmanHere(): boolean {
      return this.isBatmanHere;
    }
  
    public getSpeed(): number {
      return this.isBatmanHere ? 500 : 110;
    }
  }