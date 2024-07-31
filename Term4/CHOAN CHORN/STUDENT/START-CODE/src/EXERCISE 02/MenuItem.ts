export class Menuitem{
    getPrice() {
        throw new Error("Method not implemented.");
    }
    constructor(private name: string, private description: string, private price: number){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getName(): string{
        return this.name;
    }
    getDescription(): string{
        return this.description;
    }
    setPrice(newPrice:number): void {
        if (typeof newPrice === 'number') {
            this.price = newPrice;
        } else {
            console.log('Invalid input! Please enter a valid number.');
        }
        
    }

}