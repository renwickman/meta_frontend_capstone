import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
    <ChakraProvider>
    <Nav />
      <Header />
        <Main />
        <Footer />
    </ChakraProvider>
    </>
  );
}

export default App;
