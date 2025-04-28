import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({
  name = "Unknown",
  team = "N/A",
  nationality = "N/A",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/150"
}) => {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    textAlign: 'center', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
