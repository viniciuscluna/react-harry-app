import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, Input, Row } from 'reactstrap';
import CardList from "../../components/cardList"
import { getPersonagens } from '../../services/apiService';
import CharacterType from '../../types/api/characterType';


export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  // Fetch data from external API
  const personagens = (await getPersonagens()).filter(f => f.attributes.image)

  // Pass data to the page via props
  return { props: { personagens } }
}

interface PersonagensProp {
  personagens: CharacterType[];
}

const Page = ({ personagens }: PersonagensProp) => {
  const [personagensFiltrados, setPersonagensFiltrados] = useState<CharacterType[]>(personagens);
  const [pagina, setPagina] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filtroNome, setFiltroNome] = useState<string>("");


  useEffect(() => {
    const efetivarConsulta = async () => {
      setIsLoading(true);
      const newPersonagens = (await getPersonagens(pagina, filtroNome));
      if (pagina === 1)
        setPersonagensFiltrados(newPersonagens);
      else setPersonagensFiltrados(arr => arr.concat(newPersonagens));
      setIsLoading(false);
    }
    (async () => {
      if (filtroNome && filtroNome.length >= 4) {
        await efetivarConsulta()
      }
      else if (pagina > 1) {
        await efetivarConsulta()
      }
      else
        setPersonagensFiltrados(personagens);
    })();
  }, [filtroNome, pagina, personagens])


  const carregarMais = async () => setPagina(pg => pg + 1);
  const changeSearch = async (nome: string) => {
    setFiltroNome(nome); setPagina(1);
  }

  return (
    <div className="mx-3 p-2 row page-personagens">
      <h3 className='my-4'>Personagens</h3>
      <Row>
        <Input
          className="form-control mt-2 search-input"
          placeholder="Pesquisar"
          aria-label="Pesquisar"
          autoFocus={true}
          onChange={(e: React.FormEvent<HTMLInputElement>) => changeSearch(e.currentTarget.value)}
        />
        <CardList cards={personagensFiltrados} />
      </Row>
      <Row className='text-center mt-2'>
        <Button
          color='success'
          outline
          block
          onClick={carregarMais}
          disabled={isLoading}
        >{isLoading ? 'Carregando...' : 'Carregar mais...'}</Button>
      </Row>
    </div>
  )
}

export default Page;