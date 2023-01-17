import React from 'react'
import PropTypes from "prop-types"
import "./Hero.css"
import emptyStar from '../../assets/images/empty-star.png';
import filledStar from '../../assets/images/filled-star.png';

function Hero({recentEntry}) {
    // const [heroObject, setHeroObject] = useState(recentEntry);

  return (
    <div className='hero-component'>
        <section className='hero-container'>
        <div className="hero-photo-container">
          <img 
            src={recentEntry.photos[0].photo_path} 
            alt={`Photo taken by ${recentEntry.name}`}/>
        </div>
        <div className="hero-description-container">
          <div className='hero-name-and-favorites-container'>
            <h2>{recentEntry.name}</h2>
            <div className="hero-star-wrapper">
              <img src={recentEntry.is_favorite ? filledStar : emptyStar}></img>
            </div>
          </div>
          <div className="hero-background-bio">
            <span>{recentEntry.country_of_origin}</span>
            <span>b. {recentEntry.birth_year}</span>
            {recentEntry.death_year === 'alive' ? <span></span> : <span>d. {recentEntry.death_year}</span>}
          </div>
          <p>{recentEntry.bio}</p>
        </div>
        </section>
    </div>
  )
}

export default Hero

Hero.propTypes = {
    recentEntry: PropTypes.object
  };