import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhotographerCard from '../PhotographerCard/PhotographerCard';
import { Link } from 'react-router-dom';
import './Photographers.css';

function Photographers({ photographers }) {
  const [allPhotographers, setAll] = useState(true)

  const renderPhotoCards = () => {
    let photoList = photographers;

    if (!allPhotographers) {
      photoList = photographers.filter(p => p.is_favorite)
    }

    return photoList.map((photographer) => {
      return (
        <PhotographerCard
          key={photographer.id}
          id={photographer.id}
          isFavorite={photographer.is_favorite}
          photo={photographer.photos[0].photo_path}
          photoDescription={photographer.photos[0].description}
          name={photographer.name}
          from={photographer.country_of_origin}
          born={photographer.birth_year}
          death={photographer.death_year}
          bio={photographer.bio}
        />
      );
    });
  }

  // console.log("Display All photographers?", allPhotographers)

  return (
    <div className="photographers-container">
      {/* TOP - PHOTOGRAPHERS MENU AND FORM BUTTON */}
      <div className="photographers-navigation">
        <h2 className="photographer-h2-label">Photographers</h2>
        <div className="photographers-cards-display">
          {/* <Link>All</Link> / 
          <Link>Favorite</Link> */}
          <button className={`cards-display ${allPhotographers ? "selected" : ""}`} onClick={() => setAll(true)}>All</button>
          <p>/</p>
          <button className={`cards-display ${!allPhotographers ? "selected" : ""}`} onClick={() => setAll(false)}>Favorite</button>
        </div>
        <Link to="/form">
          <button className="add-new-photographer">Add New Photographer</button>
        </Link>
      </div>
      <div className="all-photographer-cards">
        {renderPhotoCards()}
      </div>
    </div>
  );
}

export default Photographers;

Photographers.propTypes = {
  photographers: PropTypes.arrayOf(PropTypes.object),
};
