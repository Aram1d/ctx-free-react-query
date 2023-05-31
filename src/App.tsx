import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCustomQuery } from "./react-query.tsx";
import { AnotherComponent } from "./AnotherComponent.tsx";

function App() {
  const { isFetching, data, refetch } = useCustomQuery();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React query "context free" demo</h1>
      <div className="card">
        <button onClick={() => refetch()}>refetch</button>
        <p>
          Query is laoding: {isFetching ? "yes" : "no"}. Query data: {data}
        </p>
      </div>
      <AnotherComponent />
    </>
  );
}

export default App;
