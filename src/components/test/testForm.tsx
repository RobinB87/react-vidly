import React, { ChangeEvent, useState } from "react";
import { FormControl, Grid, InputAdornment, TextField, Button, Select, MenuItem } from "@material-ui/core";
import { testShipmentDetailsFullInit } from "./models/testShipmentDetails";

function TestForm() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Handle submit");
    console.log("ShipmentPalletDetails = ", shipmentPalletDetails);
  };

  const packageTypes = [
    { value: 1, label: "DoosA4" },
    { value: 2, label: "EuropaPallet" },
  ];
  const [shipmentPalletDetails, setShipmentPalletDetails] = useState(testShipmentDetailsFullInit);

  const handleChangePackageType = ({ target: input }: any) => {
    const shipment = { ...shipmentPalletDetails };
    shipment.packageType = input.value;
    setShipmentPalletDetails(shipment);
  };

  const handleChangeShipmentPalletDetails = ({
    currentTarget: input,
  }: ChangeEvent<{ name: string; value: unknown }>) => {
    const shipment = { ...shipmentPalletDetails };
    shipment[input.name] = input.value;
    setShipmentPalletDetails(shipment);
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
                value={shipmentPalletDetails.packageType}
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
                value={shipmentPalletDetails.oplage}
              />
            </FormControl>

            {!shipmentPalletDetails?.packageType ? (
              <Grid></Grid>
            ) : (
              <Grid>
                {shipmentPalletDetails?.packageType === 1 ? (
                  <Grid>
                    <FormControl>
                      <TextField
                        id="amountOfItemsPerBox"
                        name="amountOfItemsPerBox"
                        label="Aantal items per doos"
                        onChange={handleChangeShipmentPalletDetails}
                        value={shipmentPalletDetails.amountOfItemsPerBox}
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
                        value={shipmentPalletDetails.numberPerPack}
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        id="numberOfPacksPerLayer"
                        name="numberOfPacksPerLayer"
                        label="Aantal pakken per laag"
                        onChange={handleChangeShipmentPalletDetails}
                        value={shipmentPalletDetails.numberOfPacksPerLayer}
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        id="numberOfLayers"
                        name="numberOfLayers"
                        label="Aantal lagen"
                        onChange={handleChangeShipmentPalletDetails}
                        value={shipmentPalletDetails.numberOfLayers}
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
                value={shipmentPalletDetails.weight}
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
