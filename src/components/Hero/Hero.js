import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';
import redEmptyStar from '../../assets/images/red-empty-star.png';
import redFilledStar from '../../assets/images/red-filled-star.png';

function Hero({ recentEntry }) {
  let favoriteStar = {};

  if (recentEntry.isFavorite) {
    favoriteStar = {
      backgroundColor: 'transparent',
      backgroundImage: `url(${redFilledStar})`,
      backgroundSize: 'cover',
      border: 'none',
      cursor: 'pointer',
      height: '100%',
      inlineSize: '100%',
    };
  } else {
    favoriteStar = {
      backgroundColor: 'transparent',
      backgroundImage: `url(${redEmptyStar})`,
      backgroundSize: 'cover',
      border: 'none',
      cursor: 'pointer',
      height: '100%',
      inlineSize: '100%',
    };
  }

  return (
    <div className="hero-component">
      <section className="hero-container">
        <div className="hero-photo-container">
          <img
            src={recentEntry.photos[0].photo_path}
            alt={`Photo taken by ${recentEntry.name}`}
            title={recentEntry.photos[0].description}
          />
        </div>
        <div className="hero-description-container">
          <div className="hero-name-and-favorites-container">
            <h2>{recentEntry.name}</h2>
            <div className="hero-star-wrapper">
              <button style={favoriteStar}/>
            </div>
          </div>
          <div className="hero-background-bio">
            <span>{recentEntry.country_of_origin}</span>
            <span>b. {recentEntry.birth_year}</span>
            {recentEntry.death_year === 'alive' ? (
              <span></span>
            ) : (
              <span>d. {recentEntry.death_year}</span>
            )}
          </div>
          <p>{recentEntry.bio}</p>
        </div>
      </section>
    </div>
  );
}

export default Hero;

Hero.propTypes = {
  recentEntry: PropTypes.object,
};
