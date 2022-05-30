import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector(props) {
  const [cat, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={props.category}>{props.category}</InputLabel>
      <Select
          labelId={props.category}
          id={props.category}
          value={cat}
          label={props.category}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            props.choices.map(function(choice){
              return <MenuItem value={choice}>{choice}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}