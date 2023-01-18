import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPhotographer } from '../../api-calls';
import './PhotographerDetails.css';
import redEmptyStar from '../../assets/images/red-empty-star.png';
import redFilledStar from '../../assets/images/red-filled-star.png';

// function PhotographerDetails({ id }) {
function PhotographerDetails({
  id,
  name,
  isFavorite,
  birthYear,
  deathYear,
  countryOrigin,
  based,
  groupAffiliations,
  bio,
  userNotes,
}) {
  //   const [photographer, setPhotographer] = useState({});
  //   const [error, setError] = useState('');
  //   const [isLoading, setLoading] = useState(true);
  //   const [isFavorite, setFavorite] = useState(false);

  //   useEffect(() => {
  //     const fetchPhotographer = async () => {
  //       try {
  //         const data = await getPhotographer(id);
  //         setPhotographer(data);
  //         setFavorite(data.is_favorite)
  //         setLoading(false);
  //       } catch (err) {
  //         setError(err);
  //       }
  //     };
  //     fetchPhotographer();
  //   }, []);

  let favoriteStar = {};

  const favoritedStar = {
    backgroundColor: 'transparent',
    backgroundImage: `url(${redFilledStar})`,
    backgroundSize: 'cover',
    border: 'none',
    cursor: 'pointer',
    height: '100%',
    inlineSize: '100%',
  };

  const unFavoritedStar = {
    backgroundColor: 'transparent',
    backgroundImage: `url(${redEmptyStar})`,
    backgroundSize: 'cover',
    border: 'none',
    cursor: 'pointer',
    height: '100%',
    inlineSize: '100%',
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    console.log('click');
    // if (isFavorite) {
    //     setPhotographer((prevState) => {
    //         const favoriteChange = { ...prevState};
    //         favoriteChange.is_favorite = false;
    //         // setPhotographers all the way back to App
    //         return favoriteChange;
    //     })
    // } else {
    //     setPhotographer((prevState) => {
    //         const favoriteChange = { ...prevState};
    //         favoriteChange.is_favorite = true;
    //         return favoriteChange;
    //     })
    // }
  };

  return (
    <div className="detail-page">
      {name && (
        <div className="details-component">
          <section className="details-container">
            <div className="background-container">
              <div className="details-star-wrapper">
                <input
                  type="button"
                  style={isFavorite ? favoritedStar : unFavoritedStar}
                  onClick={(event) => handleOnClick(event)}
                />
              </div>
              <div className="name-wrapper">
                <h2>{name}</h2>
              </div>
              <div className="background-info">
                <span>
                  Born: {birthYear} {deathYear === 'alive' ? '' : `| Death: ${deathYear}`}
                </span>
                <span>From: {countryOrigin}</span>
                <span>Based: {based}</span>
                <span>Group Affiliations: {groupAffiliations}</span>
              </div>
            </div>
            <div className="bio-and-notes">
              <h4>Bio:</h4>
              <p className="details-page-bio">{bio}</p>
              <h4>Notes:</h4>
              <p className="details-page-bio">{userNotes}</p>
            </div>
          </section>
          <div className="details-gallery">
            <p className="view-gallery">Gallery under repair, we apologize for the inconvenience</p>
          </div>
        </div>
      )}
    </div>
  );
}
//   return (
//     <div className="detail-page">
//       {photographer && (
//         <div className="details-component">
//           <section className="details-container">
//             <div className="background-container">
//               <div className="details-star-wrapper">
//                 <input type="button" style={photographer.is_favorite ? favoritedStar : unFavoritedStar} onClick={event => handleOnClick(event)} />
//               </div>
//               <div className="name-wrapper">
//                 <h2>{photographer.name}</h2>
//               </div>
//               <div className="background-info">
//                 <span>
//                   Born: {photographer.birth_year}{' '}
//                   {photographer.death_year === 'alive' ? '' : `| Death: ${photographer.death_year}`}
//                 </span>
//                 <span>From: {photographer.country_of_origin}</span>
//                 <span>Based: {photographer.based}</span>
//                 <span>Group Affiliations: {photographer.group_affiliations}</span>
//               </div>
//             </div>
//             <div className="bio-and-notes">
//               <h4>Bio:</h4>
//               <p className="details-page-bio">{photographer.bio}</p>
//               <h4>Notes:</h4>
//               <p className="details-page-bio">{photographer.user_notes}</p>
//             </div>
//           </section>
//           <div className="details-gallery">
//             <p className="view-gallery">Gallery under repair, we apologize for the inconvenience</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export default PhotographerDetails;

PhotographerDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  isFavorite: PropTypes.bool,
  birthYear: PropTypes.any,
  deathYear: PropTypes.any,
  countryOrigin: PropTypes.string,
  based: PropTypes.string,
  groupAffiliations: PropTypes.string,
  bio: PropTypes.string,
  userNotes: PropTypes.string,
};
