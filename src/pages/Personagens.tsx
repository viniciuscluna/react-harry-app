import { useState, useEffect } from 'react';
import CardList from "../components/CardList"
import PersonagemType from "../types/PersonagemType"
import { getPersonagens } from '../services/apiService';
import './Personagens.scss';
import useLoaderStore from '../stores/loaderStore';

export default () => {

  const setLoading = useLoaderStore((state) => state.setLoading);

  const [personagens, setPersonagens] = useState<PersonagemType[]>([]);
  const [personagensFiltrados, setPersonagensFiltrados] = useState<PersonagemType[]>(personagens);

  useEffect(() => {
    const fetchPersonagens = async () => {
      setLoading(true);
      const result = await getPersonagens();
      setPersonagens(result);
      setPersonagensFiltrados(result);
      setLoading(false);
    }

    fetchPersonagens();

  }, [getPersonagens, setLoading]);


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
      <CardList cards={personagensFiltrados} />
    </div>
  )
}

