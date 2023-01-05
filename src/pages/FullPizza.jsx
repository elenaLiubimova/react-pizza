import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const {data} = await axios.get('https://63b16f730d51f5b29717d742.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  return (
    <div className='container'>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>Цена: {pizza.price} р.</h4>
    </div>
  );
}

export default FullPizza;