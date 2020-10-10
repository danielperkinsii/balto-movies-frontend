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
fetch(baseURL + '/api/v1/dogs/', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
        'Content-Type': 'application/json'
    }
}).then (res => res.json()).then(resJson => {
    this.props.handleAddDog(resJson)
    this.setState({
        name: '',
        owner: '',
        breed: '',
    })
}).catch(error => console.error({'Error': error}))
}
  render () {
    return (
      <div className="App">
          
        {/* form component */}
        <h2>Add a Movie</h2>

        <form>
          <label htmlFor='title'>Title</label><br/> 

          {/* Title  */}
            <input type='text' id='title' name='title' onChange={this.handleChange} value={null} placeholder='title'/><br/> 

          {/* Year */}
            <label htmlFor='year'>Year</label><br/>  
            <input type='text' id='year' name='tear' onChange={this.handleChange} value={null} placeholder='year'/><br/> 

          {/* Origin */}
            <label htmlFor='origin'>Origin</label><br/>  
            <input type='text' id='origin' name='origin' onChange={this.handleChange} value={null} placeholder='origin'/><br/> 

          {/* Director */}
            <label htmlFor='director'>Director</label><br/>  
            <input type='text' id='director' name='director' onChange={this.handleChange} value={null} placeholder='director'/><br/> 
          
          {/* Cast */}
            <label htmlFor='cast'>Cast</label><br/>  
            <input type='text' id='cast' name='cast' onChange={this.handleChange} value={null} placeholder='cast'/><br/> 

          {/* Genre */}
            <label htmlFor='genre'>Genre</label><br/>  
            <input type='text' id='genre' name='genre' onChange={this.handleChange} value={null} placeholder='genre'/><br/> 

          {/* Wiki */}
            <label htmlFor='wiki'>Wiki</label><br/>  
            <input type='text' id='wiki' name='wiki' onChange={this.handleChange} value={null} placeholder='wiki'/><br/> 
          
          {/* Plot */}
            <label htmlFor='plot'>Plot</label><br/>  
            <input type='text' id='plot' name='plot' onChange={this.handleChange} value={null} placeholder='plot'/><br/> 
                    
          </form>
        <button>Add</button>
      </div>
    );
  }
}
  
  export default NewForm;
  