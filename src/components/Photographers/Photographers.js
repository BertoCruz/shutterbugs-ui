import React from 'react';
import PropTypes from 'prop-types';
import PhotographerCard from '../PhotographerCard/PhotographerCard';
import { Link } from 'react-router-dom';
import './Photographers.css';

function Photographers({ photographers }) {
  const photographerCards = photographers.map((photographer) => {
    return (
      <PhotographerCard
        key={photographer.id}
        id={photographer.id}
        isFavorite={photographer.is_favorite}
        photo={photographer.photos[0].photo_path}
        name={photographer.name}
        from={photographer.country_of_origin}
        born={photographer.birth_year}
        death={photographer.death_year}
        bio={photographer.bio}
      />
    );
  });

  return (
    <div className="photographers-container">
      {/* TOP - PHOTOGRAPHERS MENU AND FORM BUTTON */}
      <div className="photographers-navigation">
        <h2 className="photographer-h2-label">Photographers</h2>
        <div className="photographers-cards-display">
          {/* <Link>All</Link> / 
          <Link>Favorite</Link> */}
          <button className="cards-display selected">All</button>
          <p>/</p>
          <button className="cards-display">Favorite</button>
        </div>
        <Link to="/form">
          <button className="add-new-photographer">Add New Photographer</button>
        </Link>
      </div>
      <div className="all-photographer-cards">{photographerCards}</div>
    </div>
  );
}

export default Photographers;

Photographers.propTypes = {
  photographers: PropTypes.arrayOf(PropTypes.object),
};
