import React from 'react'
import context from 'react-bootstrap/esm/AccordionContext';
import MovieCard from './MovieCard';
const MovieList = ({ movie }) => {

    
    return (
        
        <div className="movie" style={{ justifyContent: 'space-evenly', display: 'flex', flexWrap: 'wrap',  }}>
          
          {movie.map((el) => (
                      
                      <MovieCard movie={el} />
                   ))
                    
            }
        </div>
   
    )
}

export default MovieList










