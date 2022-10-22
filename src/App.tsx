import { useState, useEffect } from 'react';
import Header from "./components/Header"
import CardList from "./components/CardList"
import CardType from "./types/CardType"
import { characterToCard } from './utils/Mapper';
import { getPersonagens } from './services/ApiServices';

const App = () => {

  const [personagens, setPersonagens] = useState<CardType[]>([]);

  useEffect(() => {
    getPersonagens()
      .then(response => {
        const card = characterToCard(response.data).filter(f => f.foto);
        setPersonagens([...card]);
      })
  }, [getPersonagens]);

  return (
    <>
      <Header />
      <CardList cards={personagens} />
    </>
  )
}

export default App
