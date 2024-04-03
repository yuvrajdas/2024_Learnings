import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
    let resData = await res.json();
    setData([...data, ...resData]);
    setLoading(false);
    setPage(page + 1);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500
    ) {
      fetchData();
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-6 m-auto" key={index}>
              <div className="card mb-3">
                <img className="card-img-top" style={{height:'100px'}} src={item.url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          ))}
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
