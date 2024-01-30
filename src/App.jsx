import { Button, Container, Grid, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import AmountInput from './components/AmountInput'
import CurrencyInput from './components/CurrencyInput'
import { CurrencyContext } from './context/CurrencyContext'
import useGetExchangeRate from './customHooks/useGetExchangeRate'

function App() {
  const {
    inputCurrency,
    setInputCurrency,
    outputCurrency,
    setOutputCurrency,
    initialAmount,
  } = useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeInputCurrency = inputCurrency.split(" ")[0];
  const codeOutputCurrency = outputCurrency.split(" ")[0];

  const handleSwitch = () => {
    setInputCurrency(outputCurrency);
    setOutputCurrency(inputCurrency);
  }

  useGetExchangeRate(
    'https://api.freecurrencyapi.com/v1/latest',
    initialAmount,
    inputCurrency,
    outputCurrency,
    codeInputCurrency,
    codeOutputCurrency,
    setResultCurrency
  );

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Typography fontWeight={200} color={'#DD9932'} fontSize={29} mb={7}>Aaxis Currency Exchange</Typography>
      <Grid container spacing={2}>
        <CurrencyInput value={inputCurrency} setValue={setInputCurrency} label="De" />

        <Grid item xs={12} md={2}>
          <Button onClick={handleSwitch} sx={{
            border: 1,
            height: "100%",
            borderColor: '#DD9932',
            color: '#DD9932'
          }}>
            Switch
          </Button>
        </Grid>

        <CurrencyInput value={outputCurrency} setValue={setOutputCurrency} label="A convertir en" />
        <AmountInput />
      </Grid>
      {initialAmount && <Typography color='#DD9932' margin={3}>{(resultCurrency*initialAmount).toFixed(2)} {outputCurrency}</Typography>}
    </Container>
  )
}

export default App
