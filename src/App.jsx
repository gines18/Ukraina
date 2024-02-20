import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchCompany from "./Search";
import Contact from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <p className="read-the-docs">
        <a
          href="https://www.gov.pl/web/rolnictwo/lista-firm-importujacych-zboze-z-ukrainy"
          target="_blank"
        ></a>
        Ministerstwo Rolnictwa i Rozwoju Wsi
      </p>
      <SearchCompany />
      <Contact />
    </>
  );
}

export default App;
