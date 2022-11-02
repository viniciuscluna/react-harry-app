import React, { useEffect, useState } from "react"
import { getMagias } from "../../services/apiService";
import useLoaderStore from "../../stores/loaderStore";
import MagiaType from "../../types/MagiaType"

export default () => {
  const [magias, setMagias] = useState<MagiaType[]>([]);
  const setLoading = useLoaderStore((state) => state.setLoading);

  useEffect(() => {
    const fetchMagias = async () => {
      setLoading(true);
      setMagias(await getMagias());
      setLoading(false);
    }

    fetchMagias();

  }, [getMagias]);

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
              <td>{magia.nome}</td>
              <td>{magia.descricao}</td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  )

}