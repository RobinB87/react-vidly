import { Button } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { resetFormFields, testShipmentDetailsFullInit } from "./models/shipmentDetails";
import TestForm from "./testForm";

const ParentForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Handle submit");
    console.log("ShipmentPalletDetails = ", shipmentDetails);
  };

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

  return (
    <form onSubmit={handleSubmit}>
      <TestForm
        shipmentDetails={shipmentDetails}
        packageTypes={packageTypes}
        handleChangePackageType={handleChangePackageType}
        handleChangeShipmentDetails={handleChangeShipmentDetails}
      />
      <Button type="submit" className="btn btn-primary" variant={"contained"}>
        Submit
      </Button>
    </form>
  );
};

export default ParentForm;
