interface IRawParams {
    [key: string]: any
}

export interface ShipmentDetails extends IRawParams {
    oplage: number;
    numberPerPack: number;
    numberOfPacksPerLayer: number;
    numberOfItemsPerfullLayer: number;

    numberOfLayers: number;
    numberOfItemsPerFullPallet: number;

    fullPallets: number;
    palletRestItems: number;

    fullRestLayers: number;
    restLayerItems: number;

    numberOfFullBoxes: number;
    boxRestItems: number;

    weight: number;
}

export const shipmentDetailsInitialState = {
    oplage: 0,
    numberPerPack: 0,
    numberOfPacksPerLayer: 0,
    numberOfItemsPerfullLayer: 0,

    numberOfLayers: 0,
    numberOfItemsPerFullPallet: 0,

    fullPallets: 0,
    palletRestItems: 0,

    fullRestLayers: 0,
    restLayerItems: 0,

    numberOfFullBoxes: 0,
    boxRestItems: 0,

    weight: 0
}