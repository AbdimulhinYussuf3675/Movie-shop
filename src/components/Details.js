import React from "react";
import PropTypes from "prop-types";

const Details = ({ movie }) => {
  const {
    rank,
    rankUpDown,
    title,
    year,
    image,
    crew,
    imDbRating,
    imDbRatingCount,
    fullTitle,
  } = movie;
  return (
    <>
      <div className="details-container">
        <div className="card-container">
          <h2 className="charc-name">{title}</h2>
          <div>
            <img className="actor-image" src={image} alt={title} />
          </div>
          <div className="detail-section">
            <div className="info">
              <>
                <table className="all-details">
                  <thead />
                  <tbody>
                    <tr className="list">
                      <td className="info-type">Rank</td>
                      <td className="info-detail">{rank}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Rank</td>
                      <td className="info-detail">{rank}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Year of Release</td>
                      <td className="info-details">
                        {year !== null ? `${year}` : "xxxx"}
                      </td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">Crew</td>
                      <td className="info-detail">{crew}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">imDbRatingCount</td>
                      <td className="info-detail">{imDbRatingCount}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">fullTitle</td>
                      <td className="info-detail">{fullTitle}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">imDbRating</td>
                      <td className="info-detail">{imDbRating}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">rankUpDown</td>
                      <td className="info-detail">{rankUpDown}</td>
                    </tr>
                    <tr className="list">
                      <td className="info-type">rankUpDown</td>
                      <td className="info-detail">{rankUpDown}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Details.prototype = {
    movie : PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Details;

