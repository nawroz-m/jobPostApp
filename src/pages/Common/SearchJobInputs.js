import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const SearchJobInputs = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="SearchInputsJobs">
        <div>
          <SearchIcon className="SearchNLocationIconClass" />
          <TextField
            sx={{ mr: 0, p: 0, minWidth: 330 }}
            id="standard-basic"
            label="Job title or kevword"
            variant="standard"
          />
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        <div>
          <LocationOnIcon className="SearchNLocationIconClass" />
          <FormControl variant="standard" sx={{ m: 0, minWidth: 330 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Florence, Italy
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="SearchNLocationIconClass">
          <Button variant="contained">Search</Button>
        </div>
      </div>
    </>
  );
};

export default SearchJobInputs;
