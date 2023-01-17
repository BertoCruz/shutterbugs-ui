import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './PhotographerCard.css';
import emptyStar from '../../images/empty-star.png';
import filledStar from '../../images/filled-star.png';

function PhotographerCard({ id, isFavorite, photo, name, from, born, death, bio }) {
  // console.log(name);
  // console.log(death);
  return (
    <NavLink to={`/${id}`}>
      <section className="photographer-card">
        <div className="card-photo-container">
          <img src={photo} alt={`Photo taken by ${name}`}></img>
        </div>
        <div className="card-description-container">
          <div className='name-and-favorites-container'>
            <h3>{name}</h3>
            <div className="card-star-wrapper">
              <img src={isFavorite ? filledStar : emptyStar}></img>
            </div>
          </div>
          <div className="card-background-bio">
            <span>{from}</span>
            <span>b. {born}</span>
            {death === 'alive' ? <span></span> : <span>d. {death}</span>}
          </div>
          <p>{bio}</p>
        </div>
      </section>
    </NavLink>
  );
}

export default PhotographerCard;

PhotographerCard.propTypes = {
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  photo: PropTypes.string,
  name: PropTypes.string,
  from: PropTypes.string,
  born: PropTypes.number,
  death: PropTypes.any,
  bio: PropTypes.string,
};
