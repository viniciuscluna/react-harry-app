import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import CardList from "../../components/cardList"
import { getPersonagens } from '../../services/apiService';
import useCharacterStore from '../../stores/charactersStore';
import useLoaderStore from '../../stores/loaderStore';
import CharacterType from '../../types/api/CharacterType';

export default () => {

  const [_, setLoading] = useRecoilState(useLoaderStore);

  const [personagens, setPersonagens] = useRecoilState(useCharacterStore);

  const [personagensFiltrados, setPersonagensFiltrados] = useState<CharacterType[]>(personagens);

  useEffect(() => {
    const fetchPersonagens = async () => {
      setLoading(true);
      const result = (await getPersonagens()).filter(f => f.image);
      setPersonagens(result);
      setPersonagensFiltrados(result);
      setLoading(false);
    }

    fetchPersonagens();

  }, [getPersonagens, setLoading]);


  const changeSearch = (text: string) => {
    const filter = personagens.filter(f => f.name.toUpperCase().includes(text.toUpperCase()));
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

