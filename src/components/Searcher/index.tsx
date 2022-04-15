import {
  AutocompleteRenderInputParams,
  Grid,
  TextField,
  Autocomplete,
} from "@mui/material";
import React from "react";
import "./Searcher.css";
import { SearcherStyle } from "./SearcherStyle";

const options = [{ label: "Charizard" }];
const renderInput = (params: AutocompleteRenderInputParams) => {
  return <TextField {...params} label="Pokemon" />;
};

const Searcher = () => {
  return (
    <div className="Searcher">
      <Grid container>
        <Grid item lg={10} xs={10} sm={16} sx={SearcherStyle.Searcher}>
          <Autocomplete freeSolo options={options} renderInput={renderInput} />
        </Grid>
      </Grid>
    </div>
  );
};

export { Searcher };
