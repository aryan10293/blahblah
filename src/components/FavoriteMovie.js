import React, {  Fragment } from 'react'
// making a reuseable custom hook 
    function useLocalStorageState(key, defaultvalue = ''){
        const [state, setState] = React.useState(() => {
        return   localStorage.getItem(key) || ''
        })

        React.useEffect(() => {
            localStorage.setItem(key, state)
            },[key,state])
        return [state, setState]
    }
function FavoriteMovie(){
    const [movieTitle, setMovieTitle] = useLocalStorageState('favMovie')
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
