import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Select.css';

export default function BasicSelect({ sortOption, setSortOption }) {
  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginBottom: 2 }} className="select-box">
      <FormControl fullWidth className="select-form-control">
        <InputLabel id="sort-select-label" className="select-label">Sort By</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          value={sortOption}
          label="Sort By"
          onChange={handleChange}
          className="select"
        >
          <MenuItem value="date-asc">Date Imported (Asc)</MenuItem>
          <MenuItem value="date-desc">Date Imported (Desc)</MenuItem>
          <MenuItem value="width-asc">Width (Asc)</MenuItem>
          <MenuItem value="width-desc">Width (Desc)</MenuItem>
          <MenuItem value="height-asc">Height (Asc)</MenuItem>
          <MenuItem value="height-desc">Height (Desc)</MenuItem>
          <MenuItem value="likes-asc">Likes (Asc)</MenuItem>
          <MenuItem value="likes-desc">Likes (Desc)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
