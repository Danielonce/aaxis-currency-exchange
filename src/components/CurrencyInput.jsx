
import { Autocomplete, Grid, TextField, Typography } from "@mui/material"
import useGetCurrencies from "../customHooks/useGetCurrencies"

const CurrencyInput = ({ value, setValue, label }) => {
  const [data, isLoading, error] = useGetCurrencies();

  return (
    <Grid item xs={12} md={5}>
      <Autocomplete
        disableClearable
        disabled={isLoading || error}
        value={value}
        options={data}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
      {error && <Typography fontSize={11} margin={.5} color={'error.main'}>Algo pasó, intenta más tarde</Typography>}
    </Grid>
  )
}

export default CurrencyInput