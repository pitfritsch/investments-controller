import Card from "@material-ui/core/Card";
import { useEffect, useState } from "react";
import FirebaseService from "../services/FirebaseService";

const TabelaValores = props => {

  const [ valores, setValores ] = useState([])

  useEffect(() => {
    FirebaseService.getDataList('valores', (resp) => setValores(resp) )
  },[])

  useEffect(() => {
    console.log(valores)
  }, [ valores ])

  return (
    <>
      {valores.map((v,i) =>
        <Card key={i}>
          {v.valor}
          <br/>
          {new Date(v.data).toLocaleDateString()}
        </Card>
      )}
    </>
  )

}
export default TabelaValores;