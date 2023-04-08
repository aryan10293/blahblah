import React, {  Fragment } from 'react'
function FavoriteMovie(){
    const [movieTitle, setMovieTitle] = React.useState(() => {
        console.log('hey')
      return   localStorage.getItem('favMovie') || ''
    })
    console.log('coolio')
    React.useEffect(() => {
        localStorage.setItem('favMovie', movieTitle)
    })
    const handleChange = event => setMovieTitle(event.target.value)
    return (
        <>
            <label htmlFor='movie'>Favorite Movie:</label>
            <input onChange={handleChange}  value={movieTitle} id='movie'/>
            <p>{movieTitle ? movieTitle : "please enter you're favorite movie"}</p>
        </>
    )
}

export default FavoriteMovie
