import {createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MeigenList from "./components/MeigenList";
import Form from "./components/Form"
const GlobalStyle = createGlobalStyle`
body {
  background-color: rgba(20, 22, 25, 0.89);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  color: #ffffff;
}
`;



function App() {

  
  
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Meigenlist" element={<MeigenList />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
