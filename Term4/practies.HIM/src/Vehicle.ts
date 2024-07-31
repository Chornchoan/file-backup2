export class Vehicle {
    protected weight: number;
    protected plateID: string;
  
    constructor(weight: number, plateID: string) {
      this.weight = weight;
      this.plateID = plateID;
    }
  
    public getWeight(): number {
      return this.weight;
    }
  
    public getPlateID(): string {
      return this.plateID;
    }
  
    public getSpeed(): number {
      return 0; // Abstract method, to be implemented by child classes
    }
  }