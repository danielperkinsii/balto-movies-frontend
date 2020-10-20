import React from 'react'
const baseURL = 'http://localhost:8000'

class EditForm extends React.Component {
    state = {
        id: this.props.movieCurrentlyBeingEdited.id,
        title: this.props.movieCurrentlyBeingEdited.title,
        year: this.props.movieCurrentlyBeingEdited.year,
        origin: this.props.movieCurrentlyBeingEdited.origin,
        director: this.props.movieCurrentlyBeingEdited.director,
        cast: this.props.movieCurrentlyBeingEdited.cast,
        genre: this.props.movieCurrentlyBeingEdited.genre,
        wiki: this.props.movieCurrentlyBeingEdited.wiki,
        plot: this.props.movieCurrentlyBeingEdited.plot
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }
    render () {
        return (
            <div>
                <form onSubmit={(event)=>{this.props.updateMovie(event, this.state)}}>

                    {/* Title  */}
                    <label htmlFor='title'>Title</label><br/>  
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
                    <input type='submit' value='Edit Movie!'/>
                </form>
            </div>
        )
    }
}

export default EditForm