import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY,ImgUrl } from '../../Constats/Constat'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    const randomRefreshParam = Math.random();
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US&refresh=${randomRefreshParam}`).then((Response)=>{
      const randomMovieIndex = Math.floor(Math.random() * Response.data.results.length);
      const randomMovie = Response.data.results[randomMovieIndex];
      setMovie(randomMovie)
    })
  },[])
  return (
    
    <div style={{backgroundImage:`url(${ImgUrl+movie?.backdrop_path})`}}
    className='baner'>
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <div className='baner_buttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div>
            <h1 className='discription'>{movie?.overview}</h1>
            
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner

