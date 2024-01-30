import axios from 'axios';
import React from 'react';

const useGetExchangeRate = (
    url,
    initialAmount,
    inputCurrency,
    outputCurrency,
    codeInputCurrency,
    codeOutputCurrency,
    setResultCurrency
  ) => {
  
  React.useEffect(() => {
    if(initialAmount) {
      axios(url, {
        params: {
          apikey: import.meta.env.VITE_API_KEY,
          base_currency: codeInputCurrency,
          currencies: codeOutputCurrency
        }
      })
        .then(response => setResultCurrency(response.data.data[codeOutputCurrency]))
        .catch(error => console.log(error))
    }
  }, [initialAmount, inputCurrency, outputCurrency]);
};

export default useGetExchangeRate;
