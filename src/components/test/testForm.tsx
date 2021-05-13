import React from "react";
import { FormControl, Grid, InputAdornment, TextField, Select, MenuItem } from "@material-ui/core";

const TestForm = (props: any) => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <Grid item xs={6}>
          <FormControl>
            <Select
              id="packageType"
              name="packageType"
              label="Selecteer pack type"
              onChange={props.handleChangePackageType}
              value={props.shipmentDetails.packageType}
              displayEmpty
              inputProps={{
                name: "packingType",
              }}>
              <MenuItem value="" disabled />
              {props.packageTypes.map((type: any) => (
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
              onChange={props.handleChangeShipmentDetails}
              value={props.shipmentDetails.oplage}
            />
          </FormControl>

          {!props.shipmentDetails?.packageType ? (
            <Grid></Grid>
          ) : (
            <Grid>
              {props.shipmentDetails?.packageType === 1 ? (
                <Grid>
                  <FormControl>
                    <TextField
                      id="amountOfItemsPerBox"
                      name="amountOfItemsPerBox"
                      label="Aantal items per doos"
                      onChange={props.handleChangeShipmentDetails}
                      value={props.shipmentDetails.amountOfItemsPerBox}
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
                      onChange={props.handleChangeShipmentDetails}
                      value={props.shipmentDetails.numberPerPack}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      id="numberOfPacksPerLayer"
                      name="numberOfPacksPerLayer"
                      label="Aantal pakken per laag"
                      onChange={props.handleChangeShipmentDetails}
                      value={props.shipmentDetails.numberOfPacksPerLayer}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      id="numberOfLayers"
                      name="numberOfLayers"
                      label="Aantal lagen"
                      onChange={props.handleChangeShipmentDetails}
                      value={props.shipmentDetails.numberOfLayers}
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
              onChange={props.handleChangeShipmentDetails}
              value={props.shipmentDetails.weight}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestForm;
