import {createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MeigenList from "./components/MeigenList";
const GlobalStyle = createGlobalStyle`
body {
  background-color: rgba(20, 22, 25, 0.89);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
`;



function App() {

  
  
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/meigenlist" element={<MeigenList />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
