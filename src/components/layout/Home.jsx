import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const Home = () => {
  const [bedrooms, setBedrooms] = useState(1);
  const [season, setSeason] = useState(1);
  const [neighbourhood, setNeighbourhood] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [city, setCity] = useState(1);
  const neighbourhoodsTokyo = {
    "Adachi Ku": 0,
    "Akiruno Shi": 1,
    "Akishima Shi": 2,
    "Arakawa Ku": 3,
    "Bunkyo Ku": 4,
    "Chiyoda Ku": 5,
    "Chofu Shi": 6,
    "Chuo Ku": 7,
    "Edogawa Ku": 8,
    "Fuchu Shi": 9,
    "Fussa Shi": 10,
    "Hachioji Shi": 11,
    "Hamura Shi": 12,
    "Higashimurayama Shi": 13,
    "Hino Shi": 14,
    "Hinohara Mura": 15,
    "Inagi Shi": 16,
    "Itabashi Ku": 17,
    "Katsushika Ku": 18,
    "Kita Ku": 19,
    "Kiyose Shi": 20,
    "Kodaira Shi": 21,
    "Koganei Shi": 22,
    "Kokubunji Shi": 23,
    "Komae Shi": 24,
    "Koto Ku": 25,
    "Kunitachi Shi": 26,
    "Machida Shi": 27,
    "Meguro Ku": 28,
    "Minato Ku": 29,
    "Mitaka Shi": 30,
    "Musashimurayama Shi": 31,
    "Musashino Shi": 32,
    "Nakano Ku": 33,
    "Nerima Ku": 34,
    "Nishitokyo Shi": 35,
    "Okutama Machi": 36,
    "Ome Shi": 37,
    "Ota Ku": 38,
    "Setagaya Ku": 39,
    "Shibuya Ku": 40,
    "Shinagawa Ku": 41,
    "Shinjuku Ku": 42,
    "Suginami Ku": 43,
    "Sumida Ku": 44,
    "Tachikawa Shi": 45,
    "Taito Ku": 46,
    "Tama Shi": 47,
    "Toshima Ku": 48,
  };
  const neighbourhoodsParis = {
    "Batignolles-Monceau": 0,
    Bourse: 1,
    "Buttes-Chaumont": 2,
    "Buttes-Montmartre": 3,
    Entrepôt: 4,
    Gobelins: 5,
    "Hôtel-de-Ville": 6,
    Louvre: 7,
    Luxembourg: 8,
    Ménilmontant: 9,
    Observatoire: 10,
    Opéra: 11,
    "Palais-Bourbon": 12,
    Panthéon: 13,
    Passy: 14,
    Popincourt: 15,
    Reuilly: 16,
    Temple: 17,
    Vaugirard: 18,
    Élysée: 19,
  };

  const neighbourhoodsMadrid = {
    Abrantes: 0,
    Acacias: 1,
    Adelfas: 2,
    Aeropuerto: 3,
    Aguilas: 4,
    "Alameda de Osuna": 5,
    Almagro: 6,
    Almenara: 7,
    Almendrales: 8,
    Aluche: 9,
    Ambroz: 10,
    Amposta: 11,
    "Apostol Santiago": 12,
    Arapiles: 13,
    Aravaca: 14,
    Arcos: 15,
    Argüelles: 16,
    Atalaya: 17,
    Atocha: 18,
    "Bellas Vistas": 19,
    Berruguete: 20,
    Buenavista: 21,
    Butarque: 22,
    Campamento: 23,
    Canillas: 24,
    Canillejas: 25,
    "Casa de Campo": 26,
    "Casco Histórico de Barajas": 27,
    "Casco Histórico de Vallecas": 28,
    "Casco Histórico de Vicálvaro": 29,
    Castellana: 30,
    Castilla: 31,
    Castillejos: 32,
    Chopera: 33,
    "Ciudad Jardín": 34,
    "Ciudad Universitaria": 35,
    Colina: 36,
    Comillas: 37,
    Concepción: 38,
    Corralejos: 39,
    Cortes: 40,
    Costillares: 41,
    "Cuatro Caminos": 42,
    "Cuatro Vientos": 43,
    Cármenes: 44,
    Delicias: 45,
    "El Goloso": 46,
    "El Pardo": 47,
    "El Plantío": 48,
    "El Viso": 49,
    Embajadores: 50,
    Entrevías: 51,
    Estrella: 52,
    Fontarrón: 53,
    "Fuente del Berro": 54,
    Fuentelareina: 55,
    Gaztambide: 56,
    Goya: 57,
    Guindalera: 58,
    Hellín: 59,
    Hispanoamérica: 60,
    Horcajo: 61,
    Ibiza: 62,
    Imperial: 63,
    Jerónimos: 64,
    Justicia: 65,
    "La Paz": 66,
    Legazpi: 67,
    Lista: 68,
    "Los Angeles": 69,
    "Los Rosales": 70,
    Lucero: 71,
    Marroquina: 72,
    "Media Legua": 73,
    Mirasierra: 74,
    Moscardó: 75,
    "Niño Jesús": 76,
    "Nueva España": 77,
    Numancia: 78,
    Opañel: 79,
    Orcasitas: 80,
    Orcasur: 81,
    Pacífico: 82,
    Palacio: 83,
    Palomas: 84,
    "Palomeras Bajas": 85,
    "Palomeras Sureste": 86,
    "Palos de Moguer": 87,
    Pavones: 88,
    Peñagrande: 89,
    Pilar: 90,
    "Pinar del Rey": 91,
    Piovera: 92,
    Portazgo: 93,
    Pradolongo: 94,
    Prosperidad: 95,
    "Pueblo Nuevo": 96,
    "Puerta Bonita": 97,
    "Puerta del Angel": 98,
    Quintana: 99,
    Recoletos: 100,
    Rejas: 101,
    "Rios Rosas": 102,
    Rosas: 103,
    Salvador: 104,
    "San Andrés": 105,
    "San Cristobal": 106,
    "San Diego": 107,
    "San Fermín": 108,
    "San Isidro": 109,
    "San Juan Bautista": 110,
    "San Pascual": 111,
    "Santa Eugenia": 112,
    Simancas: 113,
    Sol: 114,
    Timón: 115,
    Trafalgar: 116,
    Universidad: 117,
    Valdeacederas: 118,
    Valdefuentes: 119,
    Valdemarín: 120,
    Valdezarza: 121,
    Vallehermoso: 122,
    Valverde: 123,
    Ventas: 124,
    Vinateros: 125,
    "Vista Alegre": 126,
    Zofío: 127,
  };

  const menuItemsParis = Object.entries(neighbourhoodsParis).map(
    ([name, id]) => (
      <MenuItem key={id} value={id}>
        {name}
      </MenuItem>
    )
  );

  const menuItemsMadrid = Object.entries(neighbourhoodsMadrid).map(
    ([name, id]) => (
      <MenuItem key={id} value={id}>
        {name}
      </MenuItem>
    )
  );

  const menuItemsTokyo = Object.entries(neighbourhoodsTokyo).map(
    ([name, id]) => (
      <MenuItem key={id} value={id}>
        {name}
      </MenuItem>
    )
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: city,
          bedrooms,
          season,
          neighbourhood_cleansed: neighbourhood,
          bathrooms: bathrooms,
        }),
      });
      const data = await response.json();
      setPredictedPrice(data.predicted_price);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px - 64px)",
        textAlign: "center",
        p: 4,
      }}
    >
      <Typography variant="h3" sx={{ mt: 2, mb: 4 }}>
        Prédiction de prix Airbnb
      </Typography>

      <FormControl sx={{ mb: 2, width: "300px" }}>
        <InputLabel>Villes</InputLabel>
        <Select
          defaultValue="1"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="Ville"
        >
          <MenuItem value="1">Paris</MenuItem>
          <MenuItem value="2">Madrid</MenuItem>
          <MenuItem value="3">Tokyo</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ mb: 2, width: "300px" }}>
        <InputLabel>Nombre de chambres</InputLabel>
        <Select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          label="Nombre de chambres"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mb: 2, width: "300px" }}>
        <InputLabel>Saison</InputLabel>
        <Select
          defaultValue="1"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          label="Saison"
        >
          <MenuItem value="1">Printemps</MenuItem>
          <MenuItem value="2">Été</MenuItem>
          <MenuItem value="3">Automne</MenuItem>
          <MenuItem value="4">Hiver</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ mb: 2, width: "300px" }}>
        <InputLabel>Quartier</InputLabel>
        <Select
          value={neighbourhood}
          onChange={(e) => setNeighbourhood(e.target.value)}
          label="Quartier"
        >
          {city === "1"
            ? menuItemsParis.map((item) => item)
            : city === "2"
            ? menuItemsMadrid.map((item) => item)
            : city === "3"
            ? menuItemsTokyo.map((item) => item)
            : menuItemsParis.map((item) => item)}
        </Select>
      </FormControl>

      <FormControl sx={{ mb: 2, width: "300px" }}>
        <InputLabel>Nombre de salles de bains </InputLabel>
        <Select
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          label="Nombre de salles de bains"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Prédire le prix
      </Button>

      {predictedPrice && (
        <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
          Prix prédit: {predictedPrice} €
        </Typography>
      )}
    </Box>
  );
};
