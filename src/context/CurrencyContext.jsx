import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [inputCurrency, setInputCurrency] = useState("EUR - Euro");
  const [outputCurrency, setOutputCurrency] = useState("USD - US Dollar");
  const [initialAmount, setInitialAmount] = useState("");

  const value = {
    inputCurrency,
    setInputCurrency,
    outputCurrency,
    setOutputCurrency,
    initialAmount,
    setInitialAmount
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
