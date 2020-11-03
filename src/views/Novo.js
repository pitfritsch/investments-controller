import { useState } from "react";

const { TextField, Grid, Button } = require("@material-ui/core")

const Novo = async => {
  const [valor, setValor] = useState('')
  
  return (
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
      >
        Adicionar
      </Button>
    </Grid>
  )
}

export default Novo;