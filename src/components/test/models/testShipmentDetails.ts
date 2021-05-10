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

export const resetFormFields = (shipment: TestShipmentDetails) => {
    if (shipment.packageType === 1) {
        shipment.numberPerPack = 0;
        shipment.numberOfPacksPerLayer = 0;
        shipment.numberOfItemsPerfullLayer = 0;
        shipment.numberOfLayers = 0;
        shipment.numberOfItemsPerFullPallet = 0;
        shipment.fullPallets = 0;
        shipment.palletRestItems = 0;
        shipment.fullRestLayers = 0;
        shipment.restLayerItems = 0;
    } else {
        shipment.amountOfItemsPerBox = 0;
        shipment.totalNumberOfBoxes = 0;
        shipment.amountOfItemsInRestBox = 0;
        shipment.weightPerFullBox = 0;
        shipment.weightOfRestBox = 0;
    }
};

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