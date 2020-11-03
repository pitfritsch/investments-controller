import Navbar from './components/Navbar';
import './style.css';
import history from './history.js';
import { Router, Switch, Route } from 'react-router';
import Novo from './views/Novo';
import Atualizar from './views/Atualizar';
import Graficos from './views/Graficos';
import { Grid, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { amber, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette:{
    primary: {
      main: amber[700],
    },
    secondary: {
      main: teal[900],
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} style={{ padding: '20px' }}>
        <Navbar />
        <Router history={history}>
          <Switch>
            <Route path='/novo' component={Novo} />
            <Route path='/atualizar' component={Atualizar} />
            <Route path='/graficos' component={Graficos} />
          </Switch>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
