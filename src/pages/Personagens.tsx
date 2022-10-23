import { useState, useEffect } from 'react';
import CardList from "../components/CardList"
import PersonagemType from "../types/PersonagemType"
import { getPersonagens } from '../services/ApiServices';

const App = () => {

  const [personagens, setPersonagens] = useState<PersonagemType[]>([]);

  useEffect(() => {
    const fetchPersonagens = async () => {
      setPersonagens(await getPersonagens());
    }

    fetchPersonagens();

  }, [getPersonagens]);

  return (
    <>
      <CardList cards={personagens} />
    </>
  )
}

export default App
