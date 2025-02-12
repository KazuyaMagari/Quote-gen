import { useEffect, useState } from "react";
import axios from "axios";

type MeigenType = {
  quote: string;
  author: string;
};

function MeigenList() {
  const [favorites, setFavorites] = useState<MeigenType[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get("http://localhost:3001/favorites");
        setFavorites(res.data); 
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []); 

  return (
    <div style={{height: "100vh"}}>
      <h1>お気に入りリスト</h1>
      <form action="/" method="GET">
        <button>戻る</button>
      </form>
      {favorites.length === 0 ? (
        <p>お気に入りはまだありません。</p>
      ) : (
        <ul>
          {favorites.map((el, index) => (
            <li key={index}>
              {el.quote} - {el.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MeigenList;
