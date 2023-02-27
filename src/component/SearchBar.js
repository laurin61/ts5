import React from "react";


class SearchBar extends React.Component {


    
    handleFormSubmit = (e) => {
        e.preventDefault();
       
    }
    


    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-5">
                    <div className="colilg-12">
                        <input 
                             onChange={this.props.searchMovieProp} 
                             type="text" className="form-control" 
                             placeholder="Search a MOvie" 
                           
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;