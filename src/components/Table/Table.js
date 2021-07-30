import * as React from "react";
import Button from "@material-ui/core/Button";
import { DataGrid, GridColDef } from "@material-ui/data-grid";

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
  {
    field: "departureCity",
    headerName: "Departure City",
    flex: 1,
  },
  {
    field: "arrivalCity",
    headerName: "Arrival City",
    type: "number",
    flex: 1,
  },
  {
    field: "",
    headerName: "Contact",
    headerAlign: "right",
    sortable: false,
    // width: 200,
    disableClickEventBubbling: true,
    align: "right",
    filterable: false,
    hideSortIcons: true,
    renderCell: (params) => {
      const onClick = () => {
        console.log("Clicked");
      };
      return (
        <Button color="primary" onClick={onClick}>
          Contact
        </Button>
      );
    },
  },
];

export const Table = ({ searchedFlights, allFlights }) => {
  const [rows, setRows] = React.useState(allFlights);
  React.useEffect(() => {
    if (searchedFlights !== "") {
      const filteredArray = allFlights.filter(function (itm) {
        return itm.departureCity === searchedFlights;
      });
      setRows(filteredArray);
    } else {
      setRows(allFlights);
    }
  }, [allFlights, searchedFlights]);
  return (
    <div
      style={{
        height: 400,
        width: "100%",
        marginTop: "40px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        autoHeight
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick
      />
    </div>
  );
};
