import { styled, createGlobalStyle } from "styled-components";
import axios from "axios";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
body {
  background-color: #141619;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
`;

const CenterDiv = styled.div`
background-color: white;
width: 800px;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column; /* This will center the text and button properly */
text-align: center; /* Center text */
`;

function App() {

  const [Meigen, setMeigen] = useState(""); // This should be inside the App function

  const getMeigen = async () => {
      const res = await axios.get("http://localhost:3001/");
      setMeigen(res.data[Math.floor(Math.random() * 50)].quote)
     
  };
  
  return (
    <>
      <GlobalStyle />
      <CenterDiv>
        <h1>今日を頑張るあなたに</h1>
        <button onClick={getMeigen}>See the Quote</button>
        <p>{Meigen ? Meigen: "loading"}</p>

      </CenterDiv>
    </>
  );
}

export default App;
