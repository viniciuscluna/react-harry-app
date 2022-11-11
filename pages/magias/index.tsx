import { GetServerSideProps } from "next";
import React from "react"
import { getMagias } from "../../services/apiService";
import SpellType from "../../types/api/spellType";


export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  // Fetch data from external API
  const magias = await getMagias();


  // Pass data to the page via props
  return { props: { magias } }
}

interface MagiasProp {
  magias: SpellType[];
}

const App = ({ magias }: MagiasProp) => {
  return (
    <div className=" mx-3 p-2 row">
      <h3 className='my-4'>Magias</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {magias.map((magia, index) =>
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{magia.name}</td>
              <td>{magia.description}</td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  )

}

export default App;