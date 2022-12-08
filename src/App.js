import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/card';

function App() {
  const [data, setData] = useState([]);
  const [dataItems, setDataItems] = useState(5);
  const [loading, setLoading] = useState(true);
  async function getData() {
    setLoading(true);
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=${dataItems}`);
      setData(res.data.products);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setDataItems(dataItems + 5);
      getData();
    }
  };
  const cardData = data?.map((data) => {
    return <Card key={data.id} img={data.thumbnail} brand={data.brand} title={ data.title } desc={data.description} price={ data.price } rating={ data.rating } stock={ data.stock }/>
  });
  return (
    <div className="App grid">
      { cardData }
      { !loading ? <div className='flex contentCenter'>Loading...</div> : null }
    </div>
  );
}

export default App;