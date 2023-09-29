import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import gryffindorLogo from "./gryffindor_logo.png";
import hufflepuffLogo from "./hufflepuff_logo.png";
import ravenclawLogo from "./ravenclaw_logo.png";
import slytherinLogo from "./slytherin_logo.png";
import defaultImage from './your-default-image.png';

import "./Home.scss";

function Home() {
  const { house } = useParams();
  const [selectedHouse, setSelectedHouse] = useState(house || null);
  const [houseCharacters, setHouseCharacters] = useState([]);
  const houseLogos = {
    gryffindor: gryffindorLogo,
    hufflepuff: hufflepuffLogo,
    ravenclaw: ravenclawLogo,
    slytherin: slytherinLogo,
  };

  useEffect(() => {
    if (house) {
      loadCharacters(house);
    }
  }, [house]);

  const loadCharacters = async (house) => {
    try {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters/house/${house}`
      );
      setHouseCharacters(response.data);
      setSelectedHouse(house);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  return (
    <div>
      <h2>Welcome to Hogwarts!</h2>
      <div className="house-logos-container">
        <Link to="/gryffindor">
          <img
            src={houseLogos.gryffindor}
            alt="Gryffindor"
            className="house-logo glow-red"
          />
        </Link>
        <Link to="/hufflepuff">
          <img
            src={houseLogos.hufflepuff}
            alt="Hufflepuff"
            className="house-logo glow-yellow"
          />
        </Link>
        <Link to="/ravenclaw">
          <img
            src={houseLogos.ravenclaw}
            alt="Ravenclaw"
            className="house-logo glow-blue"
          />
        </Link>
        <Link to="/slytherin">
          <img
            src={houseLogos.slytherin}
            alt="Slytherin"
            className="house-logo glow-green"
          />
        </Link>
      </div>

      {selectedHouse && (
        <div>
          <h2>Characters from {selectedHouse}</h2>
          <div className="card-container-home">
            {houseCharacters.map((character, index) => (
              <div className="card-home" key={index}>
                <img
                  src={character.image || defaultImage}
                  alt={character.name}
                  className="character-image"
                />
                <h3>Name: {character.name}</h3>
                <p>Species: {character.species}</p>
                <p>House: {character.house}</p>
                <p>Ancestry: {character.ancestry}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
