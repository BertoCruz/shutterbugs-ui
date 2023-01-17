import { useEffect, useState } from 'react';
import { getAllPhotographers } from '../../api-calls';
import './App.css';
import Photographers from '../Photographers/Photographers';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

function App() {
  const [photographers, setPhotographers] = useState([]);
  const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  // const [showFavorites, setShowFavorites] =

  useEffect(() => {
    const fetchAllPhotographers = async () => {
      const data = await getAllPhotographers();
      // console.log(data);
      setPhotographers(data);
      // setIsLoading(false);
    };

    fetchAllPhotographers();
  }, []);

  console.log('HERE=====', photographers[photographers.length - 1]);
  return (
    <div className="App">
      <NavBar />
      <main>
        {photographers.length === 0 ? (
          <div className="loading-hero">...Processing</div>
          ) : (
          <Hero recentEntry={photographers[photographers.length - 1]} />
        )}
        <Photographers photographers={photographers} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
