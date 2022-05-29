import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Form() {
  const [genre, setGenre] = React.useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="genre-label">Genre</InputLabel>
      <Select
          labelId="genre-label"
          id="genre"
          value={genre}
          label="Genre"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Horror</MenuItem>
          <MenuItem value={20}>Comedy</MenuItem>
          <MenuItem value={30}>Action</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}