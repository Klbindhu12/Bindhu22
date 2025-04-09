import React from "react";
import User from "./components/User";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import ThemeProvider from "./context/ThemeContext";
import ProductsList from "./components/ProductsList";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <User name={"Bindhu"} email={"bindhu@gmail.com"} />
        <Wrapper> Something</Wrapper>
        <Counter />
        <ProductsList />
      </ThemeProvider>
    </>
  );
};

export default App;
