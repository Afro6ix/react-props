import React from 'react';
import players from './players';
import Player from './player';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PlayersList = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
