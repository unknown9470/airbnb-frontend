// src/components/layout/Home.jsx
import React, { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [roomType, setRoomType] = useState("Entire home/apt");
  const [accommodates, setAccommodates] = useState(5);
  const [beds, setBeds] = useState(8);
  const [neighbourhoodCleansed, setNeighbourhoodCleansed] = useState("Opéra");
  const [reviewScoresRating, setReviewScoresRating] = useState(3.5);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    
    const predictionData = {
      room_type: roomType,
      accommodates: Number(accommodates),  
      beds: Number(beds),                 
      neighbourhood_cleansed: neighbourhoodCleansed,
      review_scores_rating: parseFloat(reviewScoresRating), 
    };

    try {
      const response = await axios.post("http://localhost:8000/predict", predictionData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPredictedPrice(response.data.prediction);
    } catch (error) {
      setError("Erreur lors de la récupération des prédictions.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Prévisions de prix Airbnb</h1>
      {/* <div>
        <label>Type de chambre :</label>
        <input
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        />
      </div> */}
      <div>
        <label>Accommodations :</label>
        <input
          type="number"
          value={accommodates}
          onChange={(e) => setAccommodates(e.target.value)}
        />
      </div>
      <div>
        <label>Lits :</label>
        <input
          type="number"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
        />
      </div>
      <div>
        <label>Quartier :</label>
        <input
          type="text"
          value={neighbourhoodCleansed}
          onChange={(e) => setNeighbourhoodCleansed(e.target.value)}
        />
      </div>
      <div>
        <label>Note des avis :</label>
        <input
          type="number"
          value={reviewScoresRating}
          onChange={(e) => setReviewScoresRating(e.target.value)}
          step="0.1"
          min="0"
          max="5"
        />
      </div>
      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Chargement..." : "Prédire le prix"}
      </button>

      {predictedPrice && (
        <div>
          <h2>Prix prédit : {predictedPrice}</h2>
        </div>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

