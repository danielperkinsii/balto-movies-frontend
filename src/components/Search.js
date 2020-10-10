import React from 'react';
const baseURL = 'http://localhost:8000'

class Search extends React.Component {
  state = {
    title: '',
    year: '',
    origin: '',
    director: '',
    cast: '',
    genre: '',
    wiki: '',
    plot: '',
    movies: []
}

handleChange = (event) => {
event.preventDefault()
this.setState({ [event.currentTarget.id]: event.currentTarget.value})
}

handleSubmit = (event, year) => {
  event.preventDefault()
  console.log(year, 'handle submit triggered')
fetch(baseURL + '/movies/year/' + year + '/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then (res => res.json)
.then(data => {
    console.log(data)
    this.setState({
        movies: data.data,
    })
}).catch(error => console.error({'Error': error}))
}

  render () {
    return (
      <div className="App">
          
        {/* form component */}
        <h2>Search for a Movie</h2>

        <form onSubmit={ (event) => this.handleSubmit(event, this.state.year) }>
          <label htmlFor='year'>Search Year</label><br/> 

          {/* Year  */}
            <input type='text' id='year' name='year' onChange={this.handleChange} value={this.state.year} placeholder='search year'/><br/> 

            <button type='submit' value='Search!'>Search!</button>
          </form>
          
      </div>
    );
  }
}
  
export default Search;
  