import { useEffect, useState } from 'react';
import { getAllPhotographers, sendNewPhotographer } from '../../api-calls';
import { Route, Switch } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';
import FadeLoader from 'react-spinners/FadeLoader';
import './App.css';
import Photographers from '../Photographers/Photographers';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import Form from '../Form/Form';
import PhotographerDetails from '../PhotographerDetails/PhotographerDetails';
import Footer from '../Footer/Footer';

function App() {
  const [photographers, setPhotographers] = useState([]);
  const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  // const [showFavorites, setShowFavorites] =

  const submitNewPhotographer = async (newPhotographer) => {
    try {
      const data = await sendNewPhotographer(newPhotographer);
      setPhotographers((prevState) => {
        return [...prevState, data];
      });
      return true;
    } catch (err) {
      console.log('The ERROR====', err);
      setError(err);
      return false;
    }
  };

  useEffect(() => {
    const fetchAllPhotographers = async () => {
      try {
        const data = await getAllPhotographers();
        // console.log(data);
        // setTimeout(8000)
        setPhotographers(data);
        // setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    fetchAllPhotographers();
  }, []);

  // console.log('HERE=====', photographers.length);
  return (
    <div className="App">
      <NavBar />
      <main>
        {!photographers.length && !error && <DotLoader color="#010101" size={150} />}
        {error && !photographers.length && (
          <div className="error-handle-animation">
            <FadeLoader color="#010101" height={20} width={5} />
            ERROR Please refresh the page and try again...
            <br />
            If this persist, please try again later
          </div>
        )}
        {photographers.length > 0 && (
          <Switch>
            <Route exact path="/">
              <Hero recentEntry={photographers[photographers.length - 1]} />
              <Photographers photographers={photographers} />
            </Route>

            <Route path="/form">
              <Form submitNewPhotographer={submitNewPhotographer} />
            </Route>

            <Route
              path="/:id"
              render={({ match }) => {
                const shallow = photographers.splice()
                const singlePhotographer = shallow.find(
                  (item) => item.id === match.params.id
                );
                console.log("HURRRRRRR", singlePhotographer)
                // return <PhotographerDetails id={match.params.id} />;
                return (
                  <PhotographerDetails
                    id={singlePhotographer.id}
                    name={singlePhotographer.name}
                    isFavorite={singlePhotographer.is_favorite}
                    birthYear={singlePhotographer.birth_year}
                    deathYear={singlePhotographer.death_year}
                    countryOrigin={singlePhotographer.country_of_origin}
                    based={singlePhotographer.based}
                    groupAffiliations={singlePhotographer.group_affiliations}
                    bio={singlePhotographer.bio}
                    userNotes={singlePhotographer.user_notes}
                  />
                );
              }}
            />
          </Switch>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
