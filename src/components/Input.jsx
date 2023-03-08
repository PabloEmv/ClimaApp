import { TextField } from '@mui/material'
import React from 'react'

export default function Input({city, setCity, error}) {
  return (
    <TextField
            id="city"
            label="Ciudad"
            variant="outlined"
            size="small"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={error.error}
            helperText={error.message}
          />
  )
}
