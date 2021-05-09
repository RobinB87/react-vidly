import { ChangeEvent, useState } from "react";
import { FormControl, Grid, InputAdornment, TextField, Button } from "@material-ui/core";
import { ShipmentDetails, shipmentDetailsInitialState } from "./models/shipmentDetails";

function TestForm() {
  const [shipmentPalletDetails, setShipmentPalletDetails] = useState(shipmentDetailsInitialState);

  const handleChangeShipmentPalletDetails = ({
    currentTarget: input,
  }: ChangeEvent<{ name: string; value: unknown }>) => {
    const shipment = { ...shipmentPalletDetails } as ShipmentDetails;
    const targetName = input.name;
    shipment[targetName] = input.value;
    setShipmentPalletDetails(shipment);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Handle submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={5}>
          <Grid item xs={6}>
            <FormControl>
              <TextField
                id="oplage"
                name="oplage"
                label="Oplage"
                onChange={handleChangeShipmentPalletDetails}
                value={shipmentPalletDetails.oplage}
              />
            </FormControl>
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
      <Button type="submit" className="btn btn-primary" variant={"contained"} size={"large"} color="secondary">
        Submit
      </Button>
    </form>
  );
}

export default TestForm;
