import { TestShipmentDetailsBase } from "./testShipmentDetailsBase";

export interface TestShipmentDetails extends TestShipmentDetailsBase {
    numberPerPack: number;
    numberOfPacksPerLayer: number;
    numberOfItemsPerfullLayer: number;

    numberOfLayers: number;
    numberOfItemsPerFullPallet: number;

    fullPallets: number;
    palletRestItems: number;

    fullRestLayers: number;
    restLayerItems: number;
}

export const testShipmentDetailsFullInit: TestShipmentDetails = ({
    packageType: 0,
    oplage: 0,

    numberPerPack: 0,
    numberOfPacksPerLayer: 0,

    numberOfLayers: 0,
    numberOfItemsPerFullPallet: 0,

    fullPallets: 0,
    palletRestItems: 0,

    fullRestLayers: 0,
    restLayerItems: 0,

    amountOfItemsPerBox: 0,
    totalNumberOfBoxes: 0,
    amountOfItemsInRestBox: 0,
    totalWeight: 0,
    weightPerFullBox: 0,
    weightOfRestBox: 0,
    numberOfItemsPerfullLayer: 0
})