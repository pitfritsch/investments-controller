import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import TabelaValores from "../components/TabelaValores";
import FirebaseService from "../services/FirebaseService";

const Atualizar = async => {
  const [valor, setValor] = useState('')
  
  const atualizaValor = async () => {
    console.log(valor)
    await FirebaseService.pushData('valores', {
      data: new Date().getTime(),
      valor: valor
    })
    setValor('')
  }

  return (
    <>
      <Grid item xs={12}>
        <TextField
          className={'text-field'}
          value={valor}
          onChange={(v) => setValor(v.target.value)}
          variant='outlined'
          color={'secondary'}
        />
        <Button
          style={{ margin: '5px' }}
          variant="contained"
          color={'secondary'}
          onClick={atualizaValor}
        >
          Atualizar valor
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TabelaValores/>
      </Grid>
    </>
  )
}
export default Atualizar;