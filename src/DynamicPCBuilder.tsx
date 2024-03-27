import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

// Define types for the options and selections
interface Option {
  id: number;
  label: string;
  next?: Option[]; // Optional next level of options
}

// Initial options for the processor selection
const initialOptions: Option[] = [
  { id: 1, label: 'Intel Core i5', next: [{ id: 3, label: '8GB RAM' }, { id: 4, label: '16GB RAM' }] },
  { id: 2, label: 'AMD Ryzen 5', next: [{ id: 5, label: '16GB RAM' }, { id: 6, label: '32GB RAM' }] },
];

const DynamicPCBuilder: React.FC = () => {
  const [selections, setSelections] = useState<Option[]>([]);
  const [options, setOptions] = useState<Option[]>(initialOptions);

  const handleSelection = (option: Option) => {
    setSelections([...selections, option]);
    if (option.next) {
      setOptions(option.next);
    } else {
      setOptions([]);
    }
  };

  const resetForm = () => {
    setSelections([]);
    setOptions(initialOptions);
  };

  return (
    <div >
      {options.length > 0 && (
        <FormControl className='w-[200px]' margin="normal" >
          <InputLabel>Select an option</InputLabel>
          <Select
            onChange={(e) => handleSelection(options.find(option => option.id === e.target.value) as Option)}
            defaultValue=""
    
          >
            {options.map((option) => (
              <MenuItem
              
              sx={{
                '& .MuiMenuItem-root': {
                  backgroundColor: `${'black'} !important`, // Ensures background color is always applied
                  '&:hover': {
                    backgroundColor: `${'darkgray'} !important`, // Ensures hover background color is always applied
                  }
                },
              }}
              className='!bg-black !text-white mt-2 mb-2'
              key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {selections.map((selection, index) => (
        <div key={index}>
          <p>You selected: {selection.label}</p>
        </div>
      ))}

      {selections.length > 0 && (
        <Button variant="contained" color="primary" onClick={resetForm}>
          Reset
        </Button>
      )}
    </div>
  );
};

export default DynamicPCBuilder;
