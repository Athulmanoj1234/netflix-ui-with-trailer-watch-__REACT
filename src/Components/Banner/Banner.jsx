
import { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../constants/constants';
import axios from '../../axios';

import './Banner.css';

function Banner() {
 
 function getRandomNumber()  {
       return Math.floor(Math.random() * 21 );
 }

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const randomIndex = getRandomNumber();
        console.log(response.data.results[randomIndex])
        setMovie(response.data.results[randomIndex])
      })
      .catch((error) => {
        console.error('Error fetching the movie data', error);
      });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
      className="banner"
    >
      <div className="content">
        <div className="title">
          <h1>{movie ? movie.original_name || movie.title : ''}</h1>
          <div className="banner_Buttons">
            <button className="button">Play</button>
            <button className="button">New List</button>
          </div>
          <div className="description">
            <p>{movie ? movie.overview : ''}</p>
          </div>
          <div className="fade_bottom"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
