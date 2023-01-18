import React, { useEffect, useState } from 'react';
import DotLoader from 'react-spinners/DotLoader';
import './Form.css';
import redXIcon from '../../assets/images/red-x-icon.png';
import { selfPortraits } from '../../assets/data/self-portraits.js';

console.log(selfPortraits);

function Form() {
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

  const inputsToDisplay = photos.map((photoObj, index) => {
    return (
      <div className="form-photo-inputs" id={index} key={index}>
        <div className={photos.length > 1 ? ("delete-photo") : ("delete-photo hidden")}>
          <button onClick={event => deletePhotoEntry(event, index)}/>
        </div>
        <input
          className="form-photo-url"
          id={index}
          name="photo_path"
          onChange={(event) => handlePhotoInputChange(event)}
          placeholder="Paste image URL"
          type="text"
          value={photoObj['photo_path']}
        />
        <textarea
          className="form-photo-description"
          id={index}
          name="description"
          onChange={(event) => handlePhotoInputChange(event)}
          placeholder="Write the title description, including name and date, of this photo here..."
          type="text"
          value={photoObj.description}
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
      const newPhotos = prevState.filter((p, i) => i !== id)
      console.log("OVERRRR HURRR----", newPhotos);
      return newPhotos
    })
  }

  const handlePhotographerSubmit = (event) => {
    event.preventDefault();
    console.log('click');
  };

  const clearInput = () => {
    setName('');
    setBirthYear(0);
    setDeathYear('');
    setCountryOrigin('');
    setBased('');
    setGroupAffiliations('');
    setBio('');
    setPhotos(inputTags);
  };

  useEffect(() => {
    console.log(selfPortraits);
    const index = Math.floor(Math.random() * selfPortraits.length);
    const randomPortrait = selfPortraits[index];

    setRandomPortrait(randomPortrait);
  }, []);

  return (
    <div className="form-container">
      {/* {!photographers.length && !error && <DotLoader color="#010101" size={150} />} */}

      <form>
        <h2>Photographer Entry</h2>
        <div className="form-row-1">
          <input
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Name..."
            type="text"
            value={name}
          />
          <input
            name="birthYear"
            onChange={(event) => setBirthYear(event.target.value)}
            placeholder="Birth Year..."
            type="text"
            value={birthYear}
          />
          <input
            name="deathYear"
            onChange={(event) => setDeathYear(event.target.value)}
            placeholder="Year of death, or type 'alive'"
            type="text"
            value={deathYear}
          />
        </div>
        <div className="form-row-2">
          <input
            name="countryOrigin"
            onChange={(event) => setCountryOrigin(event.target.value)}
            placeholder="Country of origin..."
            type="text"
            value={countryOrigin}
          />
          <input
            name="based"
            onChange={(event) => setBased(event.target.value)}
            placeholder="What country are they based out of?"
            type="text"
            value={based}
          />
        </div>
        <input
          name="groupAffiliations"
          onChange={(event) => setGroupAffiliations(event.target.value)}
          placeholder="Group affiliations"
          type="text"
          value={groupAffiliations}
        />
        <textarea
          className="form-textarea-bio"
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
