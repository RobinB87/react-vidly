export abstract class ShipmentBaseDetails {
    constructor(oplage: number, weight: number) {
        this.oplage = oplage;
        this.weight = weight;
    }

    oplage: number;
    weight: number;
    // comments: string[];

    setWeight(items: number, totalProductWeight: number): void {
        this.weight = items * totalProductWeight / 1000;
    }
}