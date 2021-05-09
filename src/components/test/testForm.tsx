import React, { ChangeEvent, useState } from "react";
import { FormControl, Grid, InputAdornment, TextField, Button, Select, MenuItem } from "@material-ui/core";
import { TestShipmentDetails, testShipmentDetailsFullInit } from "./models/testShipmentDetails";

function TestForm() {
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

  const handleChangeShipmentPalletDetails = ({
    currentTarget: input,
  }: ChangeEvent<{ name: string; value: unknown }>) => {
    const shipment = { ...shipmentDetails };
    shipment[input.name] = input.value;
    setShipmentDetails(shipment);
  };

  const resetFormFields = (shipment: TestShipmentDetails) => {
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
    setShipmentDetails(shipment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={5}>
          <Grid item xs={6}>
            <FormControl>
              <Select
                id="packageType"
                name="packageType"
                label="Selecteer pack type"
                onChange={handleChangePackageType}
                value={shipmentDetails.packageType}
                displayEmpty
                inputProps={{
                  name: "packingType",
                }}>
                <MenuItem value="" disabled />
                {packageTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                id="oplage"
                name="oplage"
                label="Oplage"
                onChange={handleChangeShipmentPalletDetails}
                value={shipmentDetails.oplage}
              />
            </FormControl>

            {!shipmentDetails?.packageType ? (
              <Grid></Grid>
            ) : (
              <Grid>
                {shipmentDetails?.packageType === 1 ? (
                  <Grid>
                    <FormControl>
                      <TextField
                        id="amountOfItemsPerBox"
                        name="amountOfItemsPerBox"
                        label="Aantal items per doos"
                        onChange={handleChangeShipmentPalletDetails}
                        value={shipmentDetails.amountOfItemsPerBox}
                      />
                    </FormControl>
                  </Grid>
                ) : (
                  <Grid>
                    <FormControl>
                      <TextField
                        id="numberPerPack"
                        name="numberPerPack"
                        label="Aantal per pak"
                        onChange={handleChangeShipmentPalletDetails}
                        value={shipmentDetails.numberPerPack}
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        id="numberOfPacksPerLayer"
                        name="numberOfPacksPerLayer"
                        label="Aantal pakken per laag"
                        onChange={handleChangeShipmentPalletDetails}
                        value={shipmentDetails.numberOfPacksPerLayer}
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        id="numberOfLayers"
                        name="numberOfLayers"
                        label="Aantal lagen"
                        onChange={handleChangeShipmentPalletDetails}
                        value={shipmentDetails.numberOfLayers}
                      />
                    </FormControl>
                  </Grid>
                )}
              </Grid>
            )}

            <FormControl>
              <TextField
                id="weight"
                name="weight"
                label="Gewicht"
                InputProps={{
                  endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                }}
                onChange={handleChangeShipmentPalletDetails}
                value={shipmentDetails.weight}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Button type="submit" className="btn btn-primary" variant={"contained"}>
        Submit
      </Button>
    </form>
  );
}

export default TestForm;
