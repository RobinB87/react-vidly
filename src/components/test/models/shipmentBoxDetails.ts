import { ShipmentBaseDetails } from "./shipmentBaseDetails";

export class ShipmentBoxDetails extends ShipmentBaseDetails {
    constructor(oplage: number, amountOfItemsPerBox: number, weight: number, productWeight: number) {
        super(oplage, weight);

        this.amountOfItemsPerBox = amountOfItemsPerBox;

        this.totalNumberOfBoxes = Math.floor(oplage / amountOfItemsPerBox);
        this.amountOfItemsInRestBox = oplage % amountOfItemsPerBox;

        if (this.amountOfItemsInRestBox > 0) this.totalNumberOfBoxes++;

        this.weightPerFullBox = amountOfItemsPerBox * productWeight / 1000;
        this.weightOfRestBox = this.amountOfItemsInRestBox === 0
            ? 0
            : this.amountOfItemsInRestBox * productWeight / 1000;
    }

    amountOfItemsPerBox: number;
    totalNumberOfBoxes: number;
    amountOfItemsInRestBox: number;
    weightPerFullBox: number;
    weightOfRestBox: number;
}