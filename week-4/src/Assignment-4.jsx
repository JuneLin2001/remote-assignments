import { useState, useEffect } from "react";
import "./Assignment-4.css";

const APIresult = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = (page) => {
    const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 403) {
            throw new Error("API rate limit exceeded");
          } else {
            throw new Error("Failed to fetch data");
          }
        }
        return response.json();
      })
      .then((jsonData) => {
        setData((prevData) => [...prevData, ...jsonData]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        document.getElementById("title").innerText = "Failed to fetch data";
      });
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <div id="assignment4">
      <h1 id="title">This is API result</h1>
      <ul className="container">
        {data.map((item, index) => (
          <li key={index} className="card">
            <h2 className="name">{item.name}</h2>
            <p className="visibility">{item.visibility}</p>
            <br></br>
            <p className="description">{item.description}</p>
            <br></br>
            <ul className="topicsbox">
              {item.topics.map((topic, i) => (
                <li key={i} className="topics">
                  {topic}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="btn-container">
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className="button-6"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default APIresult;
