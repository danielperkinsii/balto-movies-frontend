import React from 'react';
import NewForm from './components/NewForm.js';
import EditForm from './components/EditForm.js';

const baseURL = 'http://localhost:8000'

class App extends React.Component {
  state = {
    movies: [],
    idOfMovieToEdit: -1,
    movieCurrentlyBeingEdited: null,
  }

  getMovieInfo = () => {
    fetch(baseURL + '/movies/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json()).then(data => {
      console.log(data)
      this.setState({
          movies: data.data,
      })
  }).catch(error => console.error({'Error': error}))
    // .then(res => res.text()).then(text => console.log(text))
}
  
  handleAddMovie = (movie) => {
    const copyMovies = [...this.state.movies]
    copyMovies.unshift(movie)
    this.setState({
      movies: copyMovies,
    
    })
  }

  deleteMovie = (id) => {
    console.log(id)
   fetch(baseURL + '/movies/' + id, {
     method: 'DELETE',
   }).then(res => {
     const findIndex = this.state.movies.findIndex(movie => movie.id === id)
     const copyMovies = [...this.state.movies]
     copyMovies.splice(findIndex, 1)
     this.setState({movies: copyMovies})
   } )
    // update view to reflect our data
  }

  editMovie = (movie) => {
    console.log(movie)
    console.log('movie id is', movie.id)
    // logs the ID of the movie who's edit button is being clicked
    fetch(baseURL + '/movies/' + movie.id, {
      method: 'GET',
    }).then(res => res.json()).then(data => {
      this.setState({
     
        movieCurrentlyBeingEdited: data.data,
        idOfMovieToEdit: data.data.id
      })
    })
  }

 updateMovie = (event, movie) => {
  event.prevendivefault()
  console.log('updated movie')
  console.log(movie)
  fetch(baseURL + '/movies/' + movie.id, {
    method: 'PUT',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(()=>{
    this.getMovieInfo()
    this.setState({
      idOfMovieToEdit: -1
    })
  }).catch((err) => {console.log(err)})
 }

  componendividMount = () => {
      this.getMovieInfo()
    }

 render () {
  return (
    <div className="App">
      <button type='button' onClick={ () => this.getMovieInfo()}>Click to get Movies!</button>
      <table>
        <tbody>
            {this.state.movies.map(movie => {
              return (
                <div key={movie.id}>
                    <div className="text-green-500">{movie.title}</div>
                    <div>{movie.year}</div>
                    <div>{movie.origin}</div>
                    <div>{movie.director}</div>
                    <div>{movie.cast}</div>
                    <div>{movie.genre}</div>
                    <a href={movie.wiki}>Wiki</a>
                    <div>{movie.plot}</div>
                    <div onClick={()=>this.editMovie(movie)}>Edit</div>
                    <div onClick={()=>this.deleteMovie(movie.id)}>Delete</div>
                </div>
              )
            })
          }
              </tbody>
          </table>
        {this.state.idOfMovieToEdit !== -1 ? 
        <EditForm 
          updateMovie={this.updateMovie} 
          handleChange={this.handleChange} 
          editMovie={this.editMovie} 
          idOfMovieToEdit={this.state.idOfMovieToEdit} 
          movieCurrentlyBeingEdited={this.state.movieCurrentlyBeingEdited} /> 
          
          : 
        
        <NewForm 
          handleAddMovie={this.handleAddMovie}
          getMovieInfo={this.getMovieInfo}
          movies={this.state.movies}/> }
      

    </div>
  );
 }
}

export default App;
