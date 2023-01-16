import { useEffect, useState } from 'react';
import { getAllPhotographers } from '../../api-calls';
import './App.css';
import Photographers from '../Photographers/Photographers';


function App() {
  const [photographers, setPhotographers] = useState([]);
  const [error, setError] = useState("");
  // const [showFavorites, setShowFavorites] = 

  useEffect(() => {
    const fetchAllPhotographers = async () => {
      const data = await getAllPhotographers()
      console.log(data);
      setPhotographers(data);
    }

    fetchAllPhotographers();
  }, []);

  return (
    <div className="App">
      <Photographers photographers={photographers}/>
    </div>
  );
}

export default App;
