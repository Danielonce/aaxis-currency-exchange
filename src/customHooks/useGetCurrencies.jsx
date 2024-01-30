import axios from 'axios';
import React from 'react';

const useGetCurrencies = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setIsLoading(true);
    axios('https://api.freecurrencyapi.com/v1/currencies', { params: {
      apikey: import.meta.env.VITE_API_KEY
    }})
      .then((response) => {
        const transformedArray = [];
        for (const currencyCode in response.data.data) {
          if (response.data.data.hasOwnProperty(currencyCode)) {
            const currencyData = response.data.data[currencyCode];
            transformedArray.push(`${currencyCode} - ${currencyData.name}`);
          }
        }
        setData(transformedArray);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      })
  }, []);

  return [data, isLoading, error];
};

export default useGetCurrencies;