import { useEffect, useState } from "react"
import { getMagias } from "../services/apiService";
import MagiaType from "../types/MagiaType"

export default () => {
  const [magias, setMagias] = useState<MagiaType[]>([]);

  useEffect(() => {
    const fetchMagias = async () => {
      setMagias(await getMagias());
    }

    fetchMagias();

  }, [getMagias]);

  return (
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
            <th scope="row">{index+1}</th>
            <td>{magia.nome}</td>
            <td>{magia.descricao}</td>
          </tr>
        )}

      </tbody>
    </table>
  )

}