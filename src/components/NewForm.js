import React from 'react';
const baseURL = 'http://localhost:8000'

class NewForm extends React.Component {
  state = {
    title: '',
    year: '',
    origin: '',
    director: '',
    cast: '',
    genre: '',
    wiki: '',
    plot: ''
}

handleChange = (event) => {
event.preventDefault()
this.setState({ [event.currentTarget.id]: event.currentTarget.value})
}

handleSubmit = (event) => {
  event.preventDefault()
  console.log('handle submit triggered')
fetch(baseURL + '/movies/', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
        'Content-Type': 'application/json'
    }
}).then (res => res.json()).then(resJson => {
    this.props.handleAddMovie(resJson)
    console.log(resJson)
    this.setState({
      title: '',
      year: '',
      origin: '',
      director: '',
      cast: '',
      genre: '',
      wiki: '',
      plot: ''
    })
  }).then(data => {this.props.getMovieInfo()}).catch(error => console.error({'Error': error}))
}
  render () {
    return (
      <div className="App">
          
        {/* form component */}
        <h2>Add a Movie</h2>

        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <label htmlFor='title'>Title</label><br/> 

          {/* Title  */}
            <input type='text' id='title' name='title' onChange={this.handleChange} value={this.state.title} placeholder='title'/><br/> 

          {/* Year */}
            <label htmlFor='year'>Year</label><br/>  
            <input type='text' id='year' name='tear' onChange={this.handleChange} value={this.state.year} placeholder='year'/><br/> 

          {/* Origin */}
            <label htmlFor='origin'>Origin</label><br/>  
            <input type='text' id='origin' name='origin' onChange={this.handleChange} value={this.state.origin} placeholder='origin'/><br/> 

          {/* Director */}
            <label htmlFor='director'>Director</label><br/>  
            <input type='text' id='director' name='director' onChange={this.handleChange} value={this.state.director} placeholder='director'/><br/> 
          
          {/* Cast */}
            <label htmlFor='cast'>Cast</label><br/>  
            <input type='text' id='cast' name='cast' onChange={this.handleChange} value={this.state.cast} placeholder='cast'/><br/> 

          {/* Genre */}
            <label htmlFor='genre'>Genre</label><br/>  
            <input type='text' id='genre' name='genre' onChange={this.handleChange} value={this.state.genre} placeholder='genre'/><br/> 

          {/* Wiki */}
            <label htmlFor='wiki'>Wiki</label><br/>  
            <input type='text' id='wiki' name='wiki' onChange={this.handleChange} value={this.state.wiki} placeholder='wiki'/><br/> 
          
          {/* Plot */}
            <label htmlFor='plot'>Plot</label><br/>  
            <input type='text' id='plot' name='plot' onChange={this.handleChange} value={this.state.plot} placeholder='plot'/><br/>
            <button type='submit' value='Add Movie!'>Add Movie!</button>
          </form>
          
      </div>
    );
  }
}
  
  export default NewForm;
  