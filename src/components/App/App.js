import { useEffect, useState } from 'react';
import { getAllPhotographers } from '../../api-calls';
import { Route, Switch } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';
import './App.css';
import Photographers from '../Photographers/Photographers';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import Form from '../Form/Form';
// import PhotographerDetails from "../PhotographerDetails/PhotographerDetails"
import Footer from '../Footer/Footer';

function App() {
  const [photographers, setPhotographers] = useState([]);
  const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  // const [showFavorites, setShowFavorites] =

  // submitNewPhotographer = newPhotographer => {

  // }

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

  console.log('HERE=====', photographers.length);
  return (
    <div className="App">
      <NavBar />
      <main>
        {!photographers.length && !error && <DotLoader color="#010101" size={150} />}
        {error && <div>ERROR</div>}
        {photographers.length > 0 && (
          <Switch>
            <Route exact path="/">
              <Hero recentEntry={photographers[photographers.length - 1]} />
              <Photographers photographers={photographers} />
            </Route>

            <Route path="/form">
              <Form />
            </Route>

            {/* <Route
              path="/:id"
              render={({ match }) => {
                return <PhotographerDetails id={match.params.id} />;
              }}
            /> */}
          </Switch>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
