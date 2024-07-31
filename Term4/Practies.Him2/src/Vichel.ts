export class Vichel {
    getTankCapacity: any;

    constructor(protected plateID: string, protected weight: number){
        this.plateID = plateID;
        this.weight = weight;
    }
    getPlateID(): string{
        return this.plateID;
    }
    getWeight(): number{
        return this.weight;
    }
    getSpeed(): number{
        return this.weight / 1000;
    }

}