import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import TabelaValores from "../components/TabelaValores";
import FirebaseService from "../services/FirebaseService";
import moment from 'moment-timezone'

const Atualizar = async => {
  const [valor, setValor] = useState('')
  const [data, setData] = useState("2020-01-01")
  
  const atualizaValor = async () => {
    console.log(valor)
    await FirebaseService.pushData('valores', {
      data: moment.tz(data, "America/Sao_Paulo").toDate().getTime(),
      valor: valor
    })
    setValor('')
  }

  return (
    <Grid item xs={6}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            className={'text-field'}
            value={valor}
            onChange={(v) => setValor(v.target.value)}
            variant='outlined'
            color={'secondary'}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Data"
            variant='outlined'
            type="date"
            value={data}
            onChange={(v) => setData(v.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
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
      </Grid>
    </Grid>
  )
}
export default Atualizar;