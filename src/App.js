import React from "react";
import Container from "@material-ui/core/Container";

import { Navbar, Hero, Table, Search } from "./components";

import "./App.css";

import data from "./data";

function App() {
  const [allFlights, setAllFlights] = React.useState(data.data);
  const [searchedFlights, setSearchedFlights] = React.useState("");
  return (
    <div className="App">
      <Navbar />
      <Hero>
        <Search
          allFlights={allFlights}
          setSearchedFlights={setSearchedFlights}
        />
      </Hero>
      <Container maxWidth="md">
        <Table searchedFlights={searchedFlights} allFlights={allFlights} />
      </Container>
    </div>
  );
}

export default App;
