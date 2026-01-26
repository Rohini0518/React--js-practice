//react scaler master class

const { useState, useEffect ,useRef} = React;
const STATUS = {
  LOADING: "Loading",
  ERROR: "Error",
  SUCCESS: "Success"
}

// Three current problems
// 1. I am making an API request for every change in the search query
// 2. I am not aborting the previous requests before making the next one
// 3. I am not caching anything!

 function TypeAhead() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(STATUS.LOADING);
  const [results, setResults] = useState([]);
  const cache = useRef({});

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        setStatus(STATUS.LOADING);

        if (cache.current[query]) {
          console.log("Cache HIT!");
          setStatus(STATUS.SUCCESS);
          setResults(cache.current[query]);
          return;
        }

        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=20`,
          { signal }
        );

        const data = await response.json();
        setStatus(STATUS.SUCCESS);
        cache.current[query] = data.products;

        console.log("API HIT!");
        
        setResults(data.products);
      } catch (error) {
          if(error.name !== "AbortError") {
            setStatus(STATUS.ERROR)
          }
      }
    }

    const timerId = setTimeout(fetchData, 500)

    return () => {
      clearTimeout(timerId);
      abortController.abort();
    }
  }, [query])

  return (
    <div>
        <p>Enter Products :</p>
      <input 
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)} 
      />
      {status === STATUS.LOADING && <div>Loading...</div>}
      {status === STATUS.ERROR && <div>Error Occurred!</div>}
      {status === STATUS.SUCCESS && (
        <ul>
          {results.map(result => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<TypeAhead />);

ReactDOM.createRoot(document.getElementById("root")).render(<TypeAhead/>)
