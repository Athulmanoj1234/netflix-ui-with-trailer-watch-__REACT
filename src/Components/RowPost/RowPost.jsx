

import {useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import { imageUrl, API_KEY} from '../../constants/constants'
import axios from '../../axios'

import './RowPost.css'


function RowPost(props) {

  const [movies, setMovie] = useState([]) 
  const [urlId, seturlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {//url and title are common so we reused it by using props
    
      console.log(response.data.results)
      setMovie(response.data.results)
    
    })//.catch(err =>{
      //alert('Network Error')
  
    
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
       console.log(id)
       axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
       if(response.data.results.length != 0){
        seturlId(response.data.results[0])
      }else{
        console.log('trailer not found')
      }
       })
  }
  
  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=> 
            <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'small-poster' : props.isSmall? 'poster' : props.isSmall ? 'doc-poster' : 'horror-poster' } alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
          )}
          </div>
     {  urlId && <Youtube opts={opts} videoId={urlId.key} />   }
    </div>
     
    
  )
}
 
export default RowPost
