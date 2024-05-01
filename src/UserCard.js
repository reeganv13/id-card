
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
      setUser(response.data.results[0]);
    };

    fetchData();
  }, []);

  return (
  <div className="container">
    <div className="full-card">
    
      {user && (
       
        <div className="card">
         <img className="card-image" src={user.picture.large} alt="User" />
          <div className="card-details">
            <div className="card-name">{` ${user.name.first}   ${user.name.last}`}</div>
            <p className="card-gender">  {user.gender}</p>
            <p className="card-email"> {user.email}</p>
            <p className="card-phnum"> {user.phone}</p>
           

          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default UserCard;






