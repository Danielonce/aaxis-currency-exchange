import { Grid, InputAdornment, TextField } from "@mui/material"
import { useContext } from "react"
import { CurrencyContext } from "../context/CurrencyContext"

const AmountInput = () => {
  const { initialAmount, setInitialAmount} = useContext(CurrencyContext);

  return (
    <Grid item xs={12} md={12}>
      <TextField
        fullWidth
        value={initialAmount}
        onChange={e => setInitialAmount(e.target.value)}
        label="Cantidad a convertir"
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
    </Grid>
  )
}

export default AmountInput