import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DotLoader from 'react-spinners/DotLoader';
import { getPhotographer } from '../../api-calls';
import './PhotographerDetails.css';

function PhotographerDetails({ id }) {
  const [photographer, setPhotographer] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchPhotographer = async () => {
      try {
        const data = await getPhotographer(id);
        console.log(`PHOTOGRAPHER DETAILS --- ${data}`);
        setPhotographer(data);
        setLoading(false);
      } catch (err) {
        console.log(`PHOTOGRAPHER DETAILS --- ${error}`);
        setError(err);
      }
    };
    fetchPhotographer();
  }, []);

  
  if (!isLoading) {
    const sort = photographer.photos.map((photo, index) => {
      return (
        <div className="gallery-card-wrapper" key={index}>
          <img src={photo.photo_path}></img>
        </div>
      );
    });
    setGallery(sort)
  }

  return (
    <div className='detail-page'>
      {/* {isLoading && <DotLoader color="#010101" size={150} />} */}
      {photographer && (
        <div className="details-component">
          <section className="details-container">
            <div className="background-container">
              <div className="name-wrapper">
                <h2>Henri Cartier Bresson</h2>
              </div>
              <div className="background-info">
                <span>BORN: | DEATH:</span>
                <span>FROM: </span>
                <span>BASED: </span>
                <span>GROUP AFFILIATIONS</span>
              </div>
            </div>
            <p className="details-page-bio">
                Cupidatat elit velit sunt excepteur laborum officia dolor officia. Elit occaecat eiusmod non aliqua elit officia ut amet. Elit excepteur fugiat veniam dolore sint et sint. Proident laborum commodo mollit minim cillum eu dolor ea aute quis. Enim proident laboris veniam magna aliqua tempor.

Excepteur qui laboris exercitation laborum. Consequat aliqua ea mollit nostrud amet aute in eu ad cupidatat exercitation elit. Quis exercitation officia eu proident duis do pariatur excepteur.

Nostrud in adipisicing velit nostrud amet tempor ut veniam. Reprehenderit elit aute sunt ea in proident do officia do. Commodo irure aliqua commodo nulla aliqua do magna incididunt eu cillum consequat fugiat. Adipisicing tempor nulla fugiat et ipsum reprehenderit. Exercitation commodo sit sunt proident duis minim id.

In eiusmod et ipsum in cillum ex eiusmod. Officia nulla eiusmod deserunt nostrud nulla sunt consequat consectetur sint velit incididunt aliquip. Anim irure sunt Lorem dolore amet.

Aliquip fugiat eiusmod cillum nulla culpa sint sint deserunt pariatur eu velit laborum cillum. Id qui qui labore incididunt enim pariatur amet ea excepteur. Sit aliqua et ad veniam irure excepteur Lorem laboris. Labore veniam dolor qui sint. Culpa sint laborum sunt velit et pariatur aliqua id voluptate. Mollit pariatur est sit amet enim sunt. Non ad et esse excepteur officia non do excepteur reprehenderit in.

Qui exercitation irure id consectetur. Do reprehenderit non et proident elit officia reprehenderit cupidatat aute eu occaecat adipisicing. Lorem ex ex et pariatur. Voluptate magna velit et minim do eu non pariatur ad ea consectetur. Id adipisicing ex deserunt et officia ea sunt. Amet aliqua id qui excepteur commodo nisi amet irure eiusmod culpa amet.

Sunt occaecat cupidatat culpa nostrud culpa ex occaecat ad. Sit eiusmod excepteur commodo aliqua ipsum. Commodo excepteur enim sunt pariatur sint labore sit dolore. Culpa cupidatat tempor dolore sint officia elit cupidatat dolor incididunt eiusmod consectetur nisi incididunt mollit. Cupidatat aliquip consequat duis occaecat exercitation reprehenderit non officia dolor. Eiusmod officia ullamco incididunt dolor dolor exercitation veniam irure. Laborum excepteur Lorem laboris aliqua eiusmod elit veniam.

Aliqua magna et irure sunt duis sint cupidatat sunt id aliquip. Incididunt nostrud qui nulla voluptate ea sunt tempor. Pariatur eiusmod labore cillum voluptate eu elit commodo pariatur sint aute nostrud. Ipsum Lorem consectetur do aliqua id nulla veniam do cupidatat sunt dolore qui proident. Qui sint sunt fugiat non labore voluptate culpa cupidatat consequat. Qui sit amet magna do aute ullamco nulla dolore cillum.

Elit fugiat et dolore et eiusmod ad ad. Dolore nulla est eu cillum sit in aliquip pariatur proident ad laborum nisi in amet. Magna elit cillum deserunt magna irure ea dolor voluptate. Laborum ut aliqua deserunt duis esse esse magna nulla dolore. Fugiat non pariatur laborum non.

Est occaecat sit qui fugiat dolore et irure proident dolore. Nisi veniam labore eiusmod occaecat aute nisi ex cupidatat voluptate sit fugiat excepteur. Nostrud aliqua culpa non laboris sit labore pariatur et occaecat anim nulla. Laborum ullamco eu veniam laboris qui esse amet deserunt et occaecat. Mollit ea pariatur cupidatat enim minim exercitation. Ea nisi amet sit non velit Lorem anim pariatur.
            </p>
          </section>
          <div className="details-gallery">
          {gallery}
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotographerDetails;

PhotographerDetails.propTypes = {
  id: PropTypes.string,
};
