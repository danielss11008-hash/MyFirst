import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './assets/search.png';
import Result from "./components/result";

function App() {

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const HandleSearch = () => {
    axios.get(`http://localhost:8000/user/${query}`)
      .then((res) => {
        setUser(res.data.user);
        console.log(res.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    const Handlekeydown = (e) => {
      if (e.key === 'Escape') {
        setUser(null);
        setQuery("");
      }
    };

    window.addEventListener('keydown', Handlekeydown);

    return () => {
      window.removeEventListener('keydown', Handlekeydown);
    };
  }, []);

  return (
    <>
      <div className="App">
        <div className="search_wrapper">
          <input type="text"
            placeholder="Search for Username/ID"
            className="search_input" value={query}
            onKeyDown={(e) => e.key == 'Enter' && HandleSearch()}
            onChange={(e) => setQuery(e.target.value)} />
          <button className="search_button" onClick={HandleSearch}>
            <img src={SearchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
        {user && <Result user={user} />}
      </div>
    </>
  )
}

export default App