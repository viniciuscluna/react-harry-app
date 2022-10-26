import { useState, useEffect } from 'react';
import CardList from "../components/CardList"
import PersonagemType from "../types/PersonagemType"
import { getPersonagens } from '../services/apiService';
import LoadingCard from '../components/LoadingCard';
import './Personagens.scss';

export default () => {
  const [carregando, setCarregando] = useState<boolean>(true);
  const [personagens, setPersonagens] = useState<PersonagemType[]>([]);
  const [personagensFiltrados, setPersonagensFiltrados] = useState<PersonagemType[]>(personagens);

  useEffect(() => {
    const fetchPersonagens = async () => {
      const result = await getPersonagens();
      setPersonagens(result);
      setPersonagensFiltrados(result);
      setCarregando(false);
    }

    fetchPersonagens();

  }, [getPersonagens]);


  const changeSearch = (text: string) => {
    const filter = personagens.filter(f => f.nome.toUpperCase().includes(text.toUpperCase()));
    setPersonagensFiltrados(filter);
  }

  return (
    <div className="mx-3 p-2 row page-personagens">
      <h3 className='my-4'>Personagens</h3>
      <div className="row">
        <input
          className="form-control mt-2 search-input"
          type="text"
          placeholder="Pesquisar"
          aria-label="Pesquisar"
          autoFocus={true}
          onChange={(e: React.FormEvent<HTMLInputElement>) => changeSearch(e.currentTarget.value)}></input>
      </div>
      {carregando ? <LoadingCard /> : <CardList cards={personagensFiltrados} />}
    </div>
  )
}

