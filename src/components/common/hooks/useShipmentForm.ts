import { ChangeEvent, useState } from "react";
import { resetFormFields, ShipmentDetails } from "../../test/models/shipmentDetails";
import { sendToSendShipmentTest } from "../../test/processFormInput";

const useShipmentForm = (testShipmentDetailsFullInit: ShipmentDetails) => {
    const packageTypes = [
        { value: 1, label: "DoosA4" },
        { value: 2, label: "EuropaPallet" },
    ];

    const [shipmentDetails, setShipmentDetails] = useState(testShipmentDetailsFullInit);

    const handleChangePackageType = ({ target: input }: any) => {
        const shipment = { ...shipmentDetails };
        shipment.packageType = input.value;
        resetFormFields(shipment);

        setShipmentDetails(shipment);
    };

    const handleChangeShipmentDetails = ({ currentTarget: input }: ChangeEvent<{ name: string; value: unknown }>) => {
        const shipment = { ...shipmentDetails };
        shipment[input.name] = input.value;
        setShipmentDetails(shipment);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log("Handle submit");
        console.log("ShipmentPalletDetails = ", shipmentDetails);
        sendToSendShipmentTest(shipmentDetails);
    };

    return { packageTypes, shipmentDetails, handleChangePackageType, handleChangeShipmentDetails, handleSubmit };
}

export default useShipmentForm;