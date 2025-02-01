import Nav from './Nav';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CenterMain = styled.main`
color: white;
font-family: "Times New Roman", Times, serif;
font-style: italic;
border-radius: 5%;
width: 800px;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column; /* This will center the text and button properly */
text-align: center; /* Center text */
`;

function Home() {
    const [Meigen, setMeigen] = useState(""); // This should be inside the App function
  const [author, setAuthor] = useState("");

  const getMeigen = async () => {
      const res = await axios.get("http://localhost:3001/");
      setMeigen(res.data[Math.floor(Math.random() * 50)].quote);
      setAuthor(res.data[Math.floor(Math.random() * 50)].author);
     
  };
  const addToFavorites = async () => {
    try {
      console.log("add to favorite")
       await axios.post("http://localhost:3001/favorites", {
        quote: Meigen,
        author: author,
      });

      alert("お気に入りに追加しました！");
      // setFavorites([...favorites, res.data.data]);
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };
  return (
    <>
        <Nav />
         <CenterMain>
              <h1>今日の名言</h1>
              <button onClick={getMeigen}>See the Quote</button>
              <p>{Meigen ? Meigen : "loading"}</p>
              <p>{author ? author : "loading"}</p>
              <br />
                <button type="submit" onClick={addToFavorites} disabled={!Meigen || !author}>
                  お気に入り登録
                </button>
              
              <br/>
              <br />
    </CenterMain>
    </>
   
  )
}

export default Home