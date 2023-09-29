import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './person.scss'; 
import defaultImage from './your-default-image.png';


function Person() {
  const [students, setStudents] = useState([]);
  const apiUrl = 'https://hp-api.onrender.com/api/characters';

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  return (
    <div>
      <h2></h2>
      <div className="card-container"> 
        {students.map((student, index) => (
          <div className="card" key={index}>
            <img src={student.image || defaultImage} alt={student.name} />
            <h3>Name: {student.name}</h3>
            <p>Species: {student.species}</p>
            <p>House: {student.house}</p>
            <p>Ancestry: {student.ancestry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Person;
