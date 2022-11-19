import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { useSessionStorage } from 'usehooks-ts'
import CardList from "../../components/cardList"
import { getPersonagens } from '../../services/apiService';
import CharacterType from '../../types/api/characterType';
import { CHARACTER_LIST_KEY } from '../../utils/constants';


export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  // Fetch data from external API
  const personagens = (await getPersonagens()).filter(f => f.image)

  // Pass data to the page via props
  return { props: { personagens } }
}

interface PersonagensProp {
  personagens: CharacterType[];
}

const Page = ({ personagens }: PersonagensProp) => {
  const [__, setPersonagens] = useSessionStorage<CharacterType[]>(CHARACTER_LIST_KEY, []);
  const [personagensFiltrados, setPersonagensFiltrados] = useState<CharacterType[]>(personagens);

  useEffect(() => {
    setPersonagens(personagens);
  }, [personagens, setPersonagens]);

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

export default Page;