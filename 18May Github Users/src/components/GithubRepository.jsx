import { useEffect, useState } from "react";
import ShowRepository from "./ShowRepository";
import FetchRepository from "./FetchRepository";
import "../App.css";


const GithubRepository = () => {

  const [repo, setRepo] = useState();
  const [text, setText] = useState();
  const [query, setQuery] = useState("rea");
  const [error, setError] = useState(false);
  const [per_page, setPer_Page] = useState(6);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(6);
  const [total, setTotal] = useState(null);


  useEffect(() => {
    FetchRepository(query, page, per_page).then((response) => {
      setTotal(response.data.total_count);
      setRepo(response.data.items);
      setLoading(false);
      setError(false);
    }).catch((error) => {
        setError(false);
        setLoading(false);
    })
    ;
  }, [query, page, per_page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
    setLoading(true);
  };

  return (

    <div className="main_container">
      <img
      style={{width: "15%"}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVo5vR7JRIV8hT_6tALG743PBE2qwOU6tCx5qVoOM8cnvbvJI3vLLBdXSLvAtBHlElfg&usqp=CAU"
        alt=""
      />

      <h1>Github Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search by Username"
        />
        <br />
        <br />
        <select name="per_page" id=""
        onChange={(e) => setPer_Page(e.target.value)}>
          <option value="">Select per page</option>
          <option value="5">5 results per page</option>
          <option value="6">6 results per page</option>
          <option value="7">7 results per page</option>
          <option value="8">8 results per page</option>
          <option value="9">9 results per page</option>
          <option value="10">10 results per page</option>
        </select>
        <br />
        <br />
        <input style={{color:"white", backgroundColor:"black",cursor:"pointer"}} type="submit" />
      </form>

{loading && <div>Loading....</div>}
{error && <div>error...</div>}

      <h3>Total pages {Math.floor(total / 5)}</h3>
      <br />
      <br />

      <div className="repo_div">
        {repo?.map((item) => (
          <ShowRepository item={item} key={item.id} />
        ))}
      </div>


      <div className="btn">
        <button disabled={page===1} onClick={() => setPage(page - 1)}>PREV</button>
        <button disabled={loading} onClick={() => setPage(page + 1)}>NEXT</button>
      </div>

    </div>
  );
};


export default GithubRepository;