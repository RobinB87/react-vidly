import { Button } from "@material-ui/core";
import useShipmentForm from "../../common/hooks/useShipmentForm";
import { testShipmentDetailsFullInit } from "../models/shipmentDetails";
import TestForm from "./testForm";

const ParentForm = () => {
  const { packageTypes, shipmentDetails, handleChangePackageType, handleChangeShipmentDetails, handleSubmit } =
    useShipmentForm(testShipmentDetailsFullInit);

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
