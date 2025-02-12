import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function Form() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    console.log("フォーム送信!");
      try {
        const response = await axios.post("http://localhost:3001/form", {
          author,
          quote,
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
    
        console.log("サーバーレスポンス:", response);
    
        if (response.status === 200) {
          alert("成功しました！");
          setAuthor("");
          setQuote(""); 
          navigate("/");
        }
      } catch (error) {
        console.error("送信エラー:", error);
        alert("エラーが発生しました");
      }
    }
  return (
    <div className="container" style={{ width: "60vh" }}>
      <div className="row mb-4 pb-5">
        <h1>名言を作る</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="authorInput" className="form-label">Author</label>
          <input 
            type="text" 
            name="author" 
            className="form-control" 
            id="authorInput" 
            placeholder="Bill Gates" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quoteTextarea" className="form-label">Quote</label>
          <textarea 
            className="form-control" 
            name="quote" 
            id="quoteTextarea" 
            rows={5} 
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;
