import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PhotographerCard.css';
import redEmptyStar from '../../assets/images/red-empty-star.png';
import redFilledStar from '../../assets/images/red-filled-star.png';

function PhotographerCard({id, isFavorite, photo, photoDescription, name, from, born, death, bio}) {
  // console.log(name);
  // console.log(death);
  let favoriteStar = {};

  if (isFavorite) {
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

  const handleOnClick = () => {
    console.log(`CLICKED ON CARD ID# ${id}`)
  }

  return (
    <Link to={`/${id}`}>
      <section className="photographer-card">
        <div className="card-photo-container">
          <img src={photo} alt={`Photo taken by ${name}`} title={photoDescription}></img>
        </div>
        <div className="card-description-container">
          <div className="name-and-favorites-container">
            <h3>{name}</h3>
            <div className="card-star-wrapper">
              <button style={favoriteStar} />
            </div>
            {/* 
            <div className="delete-photo>
              <button onClick={(event) => deletePhotoEntry(event, index)} />
            </div>
            */}
          </div>
          <div className="card-background-bio">
            <span>{from}</span>
            <span>b. {born}</span>
            {death === 'alive' ? <span></span> : <span>d. {death}</span>}
          </div>
          <p>{bio}</p>
        </div>
      </section>
    </Link>
  );
}

export default PhotographerCard;

PhotographerCard.propTypes = {
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  photo: PropTypes.string,
  photoDescription: PropTypes.string,
  name: PropTypes.string,
  from: PropTypes.string,
  born: PropTypes.number,
  death: PropTypes.any,
  bio: PropTypes.string,
};
