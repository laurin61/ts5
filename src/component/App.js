import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';

class App extends React.Component {
    state={
        movies:
        [],

        seachQuery:""
    }


    //FETCH API
    // async componentDidMount(){
    //   const baseUrl="http://localhost:3002/movies";
    //   const response= await fetch(baseUrl);
    //   const data = await response.json();
    //   console.log(data);
    //   this.setState ({movies:data});
    // }
  
    //AXIOS API
    async componentDidMount(){
      const response = await axios.get("http://localhost:3002/movies");
      //console.log(response.data);
      this.setState({movies:response.data});
    }
 



    // deleteMovie = (movie)=> {
    //    const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );
    //     this.setState({movies:newMovieList})    
    // }
  
  

    //FETCH API İLE DELETE
    // deleteMovie =async (movie)=> {
    //     const baseUrl=`http://localhost:3002/movies/${movie.id}`;
    //     await fetch(baseUrl,{method:"delete"})
    //     const newMovieList = this.state.movies.filter(
    //          m => m.id !== movie.id
    //      );
    //      this.setState({movies:newMovieList})    
    //  }

   
    //AXIOS API İLE DELETE
    deleteMovie =async (movie)=> {
        await axios.delete(`http://localhost:3002/movies/${movie.id}`);
        const newMovieList = this.state.movies.filter(
             m => m.id !== movie.id
         );
         this.setState({movies:newMovieList})    
     }



    searchMovie=(event) => {
        //console.log(e.target.value)
        this.setState({seachQuery:event.target.value})
    }

    

    render() {

        let filteredMovies=this.state.movies.filter(
            (movie)=>{
                return movie.name.toLowerCase().indexOf(this.state.seachQuery.toLowerCase()) !== -1
            })

        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar
                        searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    //movies={this.state.movies}
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>

        )
    }
};

export default App;