import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const MovieList = ({ movie }) => {
    const {
        id,title,year,image,
    } = movie;
    return (
        <Link  className="link"  key={id} >
            <h2 className="title">{title}</h2>
            <div>
                <img className="movie-img" src={image} alt={title} />
            </div>
            <span className="year">
                Year of release: {' '}
                {(year !== null) ? `${year}` : 'xxxx'}
            </span>
        </Link>
    );
};

MovieList.propTypes = {
    movie: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MovieList;
