import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatum eveniet vel quidem
        consequuntur nisi incidunt laudantium, dolorem cupiditate. Possimus
        officiis laborum quo laboriosam molestiae blanditiis quia nisi commodi
        incidunt quas? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur voluptatibus, beatae iusto, quisquam minus at vero deleniti
        nam reprehenderit excepturi quo aut quod odio quos non nesciunt totam
        laboriosam! Sequi?
      </p>
    </>
  );
}

export default App;
