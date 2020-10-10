import React from 'react';
import './App.css';
import NewForm from './components/NewForm.js';

const baseURL = 'http://localhost:8000'

class App extends React.Component {
  state = {
    movies: [],
    idOfMovieToEdit: -1,
    movieCurrentlyBeingEdited: null,
  }

  getMovieInfo = () => {
    fetch(baseURL + '/movie', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json()).then(data => {
      this.setState({
          movies: data.data,
      })
  }).catch(error => console.error({'Error': error}))
    // .then(res => res.text()).then(text => console.log(text))
}


 render () {
  return (
    <div className="App">
      <table>
        <tbody>
            {this.state.movies.map(movie => {
              return (
                <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.year}</td>
                    <td>{movie.origin}</td>
                    <td>{movie.director}</td>
                    <td>{movie.cast}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.wiki}</td>
                    <td>{movie.plot}</td>
                    <td onClick={null}>Edit</td>
                    <td onClick={null}>Delete</td>
                </tr>
              )
            })
          }
              </tbody>
          </table>
      <NewForm />
    </div>
  );
 }
}

export default App;
