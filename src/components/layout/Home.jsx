import { Typography, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
export const Home  = () => {
    const [location, setLocation] = useState('');
    const [predictedPrice, setPredictedPrice] = useState(null);

    const handlePredict = () => {
        fetch(`http://localhost:8000/predict?location=${location}`)
            .then(response => response.json())
            .then(data => setPredictedPrice(data.predicted_price));
    };
    const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch('http://localhost:8000/predict/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city: location }),
    });
    const data = await response.json();
    console.log(data.predicted_price);
    setPredictedPrice(data.predicted_price);
  } catch (error) {
    console.error('Error:', error);
  }
};

    return (
      <>
        <Typography variant='h3' sx={{mt:2, mb:4, textAlign:'center'}}>Prédiction de prix Airbnb</Typography>
        <Box sx={{display: "flex",
          flexDirection: "column",
          minHeight: "20vh",
          justifyContent: "center",
          alignItems: "center",p:4}}>
              
              <TextField
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="Entrez la localisation"
                  sx={{mb:2}}
              />
              
              
              <Button variant='contained' color='secondary' onClick={handleSubmit} >Prédire le prix</Button>
              {predictedPrice && <Typography variant='h5' sx={{mt:2, mb:4}}>Prix prédit: {predictedPrice}</Typography>}
          </Box>
      </>
        
    );
    
} 