import React, { forwardRef } from 'react'
import './VideoCard.css'
import ThumbsUp from '@material-ui/icons/ThumbUp'
import TextTruncate from 'react-text-truncate';


const VideoCard = forwardRef(({movie},ref) => {
    const base_url = 'https://image.tmdb.org/t/p/original/'
    return (
<div ref={ref} className="videocard">
    <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="Movie Poster"/>
    <TextTruncate
    line={1}
    element="p"
    truncateText="..."
    text={movie.overview} /> 
    <h2>{movie.title}</h2>
    <p className="videocard_stats">
        {movie.media_type && `${movie.media_type} •  `}
        {movie.release_date || movie.first_air_date + "  " }
        <ThumbsUp/>{"  "}
        {movie.vote_count}</p>
</div>
    )
})

export default VideoCard
