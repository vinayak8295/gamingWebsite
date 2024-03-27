import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';

// Define a type for the processor options
type ProcessorOption = {
  id: number;
  name: string;
  price: number;
};

// Mock data for the processors
const processors: ProcessorOption[] = [
  { id: 1, name: 'Intel Core i5', price: 200 },
  { id: 2, name: 'Intel Core i7', price: 300 },
  { id: 3, name: 'AMD Ryzen 5', price: 250 },
  { id: 4, name: 'AMD Ryzen 7', price: 350 },
];

const ProcessorSelector: React.FC = () => {
  const [selectedProcessor, setSelectedProcessor] = useState<ProcessorOption | undefined>();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const processor = processors.find(p => p.id === event.target.value);
    setSelectedProcessor(processor);
  };

  return (
    <div className="p-4">
      <FormControl fullWidth>
        <InputLabel id="processor-select-label">Processor</InputLabel>
        <Select
          labelId="processor-select-label"
          id="processor-select"
          value={selectedProcessor?.id || ''}
          label="Processor"
          onChange={handleChange}
        >
          {processors.map((processor) => (
            <MenuItem key={processor.id} value={processor.id}>{processor.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedProcessor && (
        <Typography variant="h6" className="mt-4">
          Selected Processor: {selectedProcessor.name} - ${selectedProcessor.price}
        </Typography>
      )}
    </div>
  );
};

export default ProcessorSelector;
