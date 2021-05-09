interface IRawParams {
    [key: string]: any
}

export interface TestShipmentDetailsBase extends IRawParams {
    packageType: number;
    oplage: number;
    totalWeight: number;

    amountOfItemsPerBox: number;
    totalNumberOfBoxes: number;
    amountOfItemsInRestBox: number;

    weightPerFullBox: number;
    weightOfRestBox: number;
}

// export abstract class ShipmentBaseDetails {
//     constructor(oplage: number, weight: number) {
//         this.oplage = oplage;
//         this.weight = weight;
//     }

//     oplage: number;
//     weight: number;
//     // comments: string[];

//     setWeight(items: number, totalProductWeight: number): void {
//         this.weight = items * totalProductWeight / 1000;
//     }
// }

// export class ShipmentPalletDetails extends ShipmentBaseDetails {
//     constructor(oplage: number, numberPerPack: number, numberOfPacksPerLayer: number, numberOfLayers: number, weight: number) {
//         super(oplage, weight);

//         this.oplage = oplage;
//         this.numberPerPack = numberPerPack;
//         this.numberOfPacksPerLayer = numberOfPacksPerLayer;
//         this.numberOfItemsPerfullLayer = numberPerPack * numberOfPacksPerLayer;

//         this.numberOfLayers = numberOfLayers;
//         this.numberOfItemsPerFullPallet = numberPerPack * numberOfPacksPerLayer * numberOfLayers;

//         // Obtain number of full pallets and the rest items via modulus
//         this.fullPallets = Math.floor(oplage / this.numberOfItemsPerFullPallet);
//         this.palletRestItems = this.oplage % this.numberOfItemsPerFullPallet;

//         // Obtain number of full rest layers and the rest items via modulus
//         this.fullRestLayers = this.palletRestItems === 0 ? 0 : Math.floor(this.palletRestItems / this.numberOfItemsPerfullLayer);
//         this.restLayerItems = this.palletRestItems % this.numberOfItemsPerfullLayer;

//         // Obtain number of full boxes and items for final box via modulus
//         this.numberOfFullBoxes = this.restLayerItems === 0 ? 0 : Math.floor(this.restLayerItems / this.numberPerPack);
//         this.boxRestItems = this.restLayerItems % this.numberPerPack;
//     }

//     numberPerPack: number;
//     numberOfPacksPerLayer: number;
//     numberOfItemsPerfullLayer: number;

//     numberOfLayers: number;
//     numberOfItemsPerFullPallet: number;

//     fullPallets: number;
//     palletRestItems: number;

//     fullRestLayers: number;
//     restLayerItems: number;

//     numberOfFullBoxes: number;
//     boxRestItems: number;
// }

// export class ShipmentBoxDetails {
//     constructor(oplage: number, amountOfItemsPerBox: number, weight: number, productWeight: number) {

//         this.amountOfItemsPerBox = amountOfItemsPerBox;

//         this.totalNumberOfBoxes = Math.floor(oplage / amountOfItemsPerBox);
//         this.amountOfItemsInRestBox = oplage % amountOfItemsPerBox;

//         if (this.amountOfItemsInRestBox > 0) this.totalNumberOfBoxes++;

//         this.weightPerFullBox = amountOfItemsPerBox * productWeight / 1000;
//         this.weightOfRestBox = this.amountOfItemsInRestBox === 0
//             ? 0
//             : this.amountOfItemsInRestBox * productWeight / 1000;
//     }

//     amountOfItemsPerBox: number;
//     totalNumberOfBoxes: number;
//     amountOfItemsInRestBox: number;
//     weightPerFullBox: number;
//     weightOfRestBox: number;
// }
