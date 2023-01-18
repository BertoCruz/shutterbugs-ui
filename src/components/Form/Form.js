import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types"
import DotLoader from 'react-spinners/DotLoader';
import './Form.css';
import redXIcon from '../../assets/images/red-x-icon.png';
import { selfPortraits } from '../../assets/data/self-portraits.js';

function Form({submitNewPhotographer}) {
  const inputTags = [
    {
      photo_path: '',
      description: '',
    },
  ];
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [deathYear, setDeathYear] = useState('');
  const [countryOrigin, setCountryOrigin] = useState('');
  const [based, setBased] = useState('');
  const [groupAffiliations, setGroupAffiliations] = useState('');
  const [bio, setBio] = useState('');
  const [photos, setPhotos] = useState(inputTags);
  const [randomPortrait, setRandomPortrait] = useState({});
  const [required, setRequired] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const inputsToDisplay = photos.map((photoObj, index) => {
    return (
      <div className="form-photo-inputs" id={index} key={index}>
        <div className={photos.length > 1 ? 'delete-photo' : 'delete-photo hidden'}>
          <button onClick={(event) => deletePhotoEntry(event, index)} />
        </div>
        <input
          className={
            required && photos[index]['photo_path'].length === 0 && photos.length <= 1
              ? 'form-photo-url requiredField'
              : 'form-photo-url border-reset'
          }
          id={index}
          name="photo_path"
          onChange={(event) => handlePhotoInputChange(event)}
          placeholder="Paste image URL"
          type="text"
          value={photos[index]['photo_path']}
        />
        <textarea
          className={
            required && photos[index].description.length === 0 && photos.length <= 1
              ? 'form-photo-description requiredField'
              : 'form-photo-description border-reset'
          }
          id={index}
          name="description"
          onChange={(event) => handlePhotoInputChange(event)}
          placeholder="Write the title description, including name and date, of this photo here..."
          type="text"
          value={photos[index].description}
        />
      </div>
    );
  });

  const handlePhotoInputChange = (event) => {
    event.preventDefault();
    const index = event.target.id;
    const key = event.target.name;

    setPhotos((prevState) => {
      const copyOfPhotos = prevState.slice();
      copyOfPhotos[index][key] = event.target.value;

      return copyOfPhotos;
    });
  };

  const addNewInput = (event) => {
    event.preventDefault();
    setPhotos((prevState) => {
      return [
        ...prevState,
        {
          photo_path: '',
          description: '',
        },
      ];
    });
  };

  const deletePhotoEntry = (event, id) => {
    event.preventDefault();
    setPhotos((prevState) => {
      const newPhotos = prevState.filter((p, i) => i !== id);
      return newPhotos;
    });
  };

  const validateForm = () => {
    if (
      !name ||
      !birthYear ||
      !deathYear ||
      !countryOrigin ||
      !based ||
      !groupAffiliations ||
      !bio ||
      !photos[0].description ||
      !photos[0]['photo_path']
    ) {
      return false;
    }
    return true;
  };

  const handlePhotographerSubmit = async (event) => {
    event.preventDefault();
    const validated = validateForm();

    if (validated) {
      const newPhotographer = {
        name: name,
        birth_year: birthYear,
        death_year: deathYear,
        country_of_origin: countryOrigin,
        based: based,
        group_affiliations: groupAffiliations,
        bio: bio,
        photos: photos
      }

      const verdict = await submitNewPhotographer(newPhotographer);
      if (verdict) {
        setRequired(false);
        setSubmitted(true);
        setTimeout(() => clearInputs(), 3000);
      } else { setError(true) }
    } else {
      setRequired(true);
    }
  };

  const clearInputs = () => {
    setName('');
    setBirthYear('');
    setDeathYear('');
    setCountryOrigin('');
    setBased('');
    setGroupAffiliations('');
    setBio('');
    setPhotos(inputTags);
    setRequired(false);
    setSubmitted(false);
  };

  useEffect(() => {
    const index = Math.floor(Math.random() * selfPortraits.length);
    const randomPortrait = selfPortraits[index];

    setRandomPortrait(randomPortrait);
  }, []);

  return (
    <div className="form-container">
      <form>
        <h2>Photographer Entry</h2>
        <p className="form-directions">
          Submit a new photographer by filling out the fields below. Note, the black square field is
          where you'll submit photographs taken by *this* photographer. Add as many as you like, by
          clicking the 'Add another photo' button
        </p>
        <div className="form-row-1">
          <input
            className={required && name.length === 0 ? 'requiredField' : 'border-reset'}
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Name..."
            type="text"
            value={name}
          />
          <input
            className={required && birthYear.length === 0 ? 'requiredField' : 'border-reset'}
            name="birthYear"
            onChange={(event) => setBirthYear(event.target.value)}
            placeholder="Birth Year..."
            type="text"
            value={birthYear}
          />
          <input
            className={required && deathYear.length === 0 ? 'requiredField' : 'border-reset'}
            name="deathYear"
            onChange={(event) => setDeathYear(event.target.value)}
            placeholder="Year of death, or type 'alive'"
            type="text"
            value={deathYear}
          />
        </div>
        <div className="form-row-2">
          <input
            className={required && countryOrigin.length === 0 ? 'requiredField' : 'border-reset'}
            name="countryOrigin"
            onChange={(event) => setCountryOrigin(event.target.value)}
            placeholder="Country of origin..."
            type="text"
            value={countryOrigin}
          />
          <input
            className={required && based.length === 0 ? 'requiredField' : 'border-reset'}
            name="based"
            onChange={(event) => setBased(event.target.value)}
            placeholder="What country are they based out of?"
            type="text"
            value={based}
          />
        </div>
        <input
          className={required && groupAffiliations.length === 0 ? 'requiredField' : 'border-reset'}
          name="groupAffiliations"
          onChange={(event) => setGroupAffiliations(event.target.value)}
          placeholder="Group affiliations"
          type="text"
          value={groupAffiliations}
        />
        <textarea
          className={
            required && bio.length === 0
              ? 'form-textarea-bio requiredField'
              : 'form-textarea-bio border-reset'
          }
          name="bio"
          onChange={(event) => setBio(event.target.value)}
          placeholder="Write photographers' bio here..."
          type="text"
          value={bio}
        />
        <button className="add-new-photo-btn" onClick={(event) => addNewInput(event)}>
          Add another photo
        </button>
        {inputsToDisplay}
        <div className="submit-button-container">
          {required ? (
            <span className="error-span">* Please fill out the required fields, then submit</span>
          ) : (
            <span />
          )}
          {submitted ? (
            <span className="success-span">
              📸 Successfully submitted, please navigate to home page
            </span>
          ) : (
            <span />
          )}
          {error ? (<span className='error-span'>⚠️ Something went wrong, refresh and try again</span>) : (<span />)}
          <button className="submit-button" onClick={(event) => handlePhotographerSubmit(event)}>
            Submit
          </button>
        </div>
      </form>
      <div className="form-self-portrait-wrapper">
        <img src={randomPortrait.photo} alt={`Self portrait of ${randomPortrait.name}`} />
      </div>
    </div>
  );
}

export default Form;

Form.propTypes = {
  submitNewPhotographer: PropTypes.func
}