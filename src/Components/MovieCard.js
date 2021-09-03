import React from 'react'
import { Button, Card,  Nav } from 'react-bootstrap'


export const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterurl} />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default MovieCard