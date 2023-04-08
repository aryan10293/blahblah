import Title from './components/Title';
import FavoriteMovie from './components/FavoriteMovie';
import Form from './components/Form';
import { Fragment } from 'react';
function App() {

  return (
    <>
      <h1>Trying to create a movie review app</h1>
      <Form />
      <FavoriteMovie />
      <Title />
    </>
  )
}

export default App
