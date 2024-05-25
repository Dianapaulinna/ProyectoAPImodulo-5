
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const MusicCard = () => {
  const [music, setMusic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.deezer.com/genre/0'
      );
      setMusic(result.data.data[0]);
    };

    fetchData();
  }, []);

  return (
    <Card>
      <Card.Img variant="top" src={music?.album.cover} />
      <Card.Body>
        <Card.Title>{music?.title}</Card.Title>
        <Card.Text>{music?.artist.name}</Card.Text>
        <Card.Text>Album: {music?.album.title}</Card.Text>
        <Card.Text>Release Date: {music?.release_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MusicCard;