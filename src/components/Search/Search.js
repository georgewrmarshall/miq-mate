/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  textInput: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "none",
  },
}));

export const Search = ({ allFlights, setSearchedFlights }) => {
  const [value, setValue] = React.useState("");
  const classes = useStyles();
  const uniqueArrivalCity = [
    ...new Set(allFlights.map((item) => item.departureCity)),
  ];
  const handleOnChange = (event, newValue) => {
    setValue(newValue);
    setSearchedFlights(newValue);
  };
  const handleOnClear = (e) => {
    if (e.target.value === "") {
      setSearchedFlights("");
    }
  };
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={uniqueArrivalCity.map((city) => city)}
      value={value}
      onChange={handleOnChange}
      onInputChange={handleOnClear}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search for departure city"
          margin="normal"
          variant="outlined"
          size="medium"
          InputProps={{ ...params.InputProps, type: "search" }}
          className={classes.textInput}
        />
      )}
    />
  );
};
