import React from "react";
import "./MovieList.css";
import { FaThumbsUp } from "react-icons/fa";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={movie.imageURL}
              className="card-img-top"
              alt="sample movie"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div id="buttons">
                  <button
                    type="button"
                    onClick={(event) => props.deleteMovieProp(movie)}
                    className="btn delete-btn btn-mb btn-outline-danger"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="edit-btn btn btn-mb btn-primary"
                  >
                    <FaThumbsUp size={10} />
                    Edit
                  </button>
                </div>
                <div id="rating">
                  <h2>
                    <span className="badge badge-info">{movie.rating}</span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
