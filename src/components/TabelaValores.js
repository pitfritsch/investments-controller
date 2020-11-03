import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import FirebaseService from "../services/FirebaseService";

const useStyles = makeStyles(() => {
    const theme = useTheme();
    return ({
      card: {
        color: theme.palette.secondary.contrastText,
        padding: '5px',
        margin: '5px'
      },
      cardNegativo: {
        backgroundColor: '#de7676',
      },
      cardPositivo: {
        backgroundColor: '#67acc9',
      },
      tabela: {
        maxHeight: '75vh',
        overflow: 'auto'
      }
    })
  }
)

const TabelaValores = props => {
  const classes = useStyles()
  const [ valores, setValores ] = useState([])

  useEffect(() => {
    FirebaseService.getDataList('valores', (resp) => {
      let valorAnterior = 0
      resp.forEach(i => {
        i.aumento = (i.valor / valorAnterior * 100 - 100).toFixed(2)
        valorAnterior = i.valor
        i.valor = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(i.valor)
        i.data = new Date(i.data).toLocaleDateString()
      })
      setValores(resp) 
    })
  },[])

  useEffect(() => {
    console.log(valores)
  }, [ valores ])

  return (
    <Grid item xs={12} md={4} className={classes.tabela}>
      {valores.map((v,i) =>
        <CardValor
          valor={v.valor}
          data={v.data}
          aumento={v.aumento} 
          key={i}
        />
      )}
    </Grid>
  )

}

function CardValor (props) {
  const classes = useStyles()
  return (
    <Card className={`${classes.card} ${props.aumento > 0 ? classes.cardPositivo : classes.cardNegativo}`}>
      <Grid container spacing={3} >
        <Grid item xs={6}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                {props.valor}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                {props.data}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="overline">
            {props.aumento}%
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}



export default TabelaValores;