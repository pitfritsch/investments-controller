import { Button, Grid } from '@material-ui/core';
import '../style.css';
import history from '../history.js';

const Navbar = async => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Button 
          style={{ margin: '5px' }}
          variant="contained"
          color={'primary'}
          onClick={() => history.push('/novo')}
        >
            Novo investimento
        </Button>
        <Button 
          style={{ margin: '5px' }}
          variant="contained"
          color={'primary'}onClick={() => history.push('/atualizar')}
        >
          Atualizar valor
        </Button>
        <Button 
          style={{ margin: '5px' }}
          variant="contained"
          color={'primary'}
          onClick={() => history.push('/graficos')}
        >
          Gráficos
        </Button>
      </Grid>
    </Grid>
  )
}
export default Navbar;