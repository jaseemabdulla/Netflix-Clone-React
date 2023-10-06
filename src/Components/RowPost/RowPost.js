import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../Axios'
import { ImgUrl,API_KEY } from '../../Constats/Constat'
import YouTube from 'react-youtube'


function RowPost(props) {
  const [movies, setMovie] = useState([])
  const [url, setUrl] = useState()
  useEffect(()=>{
    axios.get(props.url).then((Response)=>{
      console.log(Response.data.results)
      setMovie(Response.data?.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then((Response)=>{
      if (Response.data.results.length !== 0){
        setUrl(Response.data.results[0])
      }
      else{
        console.log('array is empty')
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {
              movies.map((movie)=>{
                return(
                  <img className={props.isSmall ? 'smallPoster' : 'poster'} src={ImgUrl+movie?.backdrop_path} onClick={()=>handleMovie(movie.id)} alt="poster" />
                )
              })
            }
            
        </div>
      { url && <YouTube opts={opts} videoId={url.key}/>  }
    </div>
  )
}

export default RowPost