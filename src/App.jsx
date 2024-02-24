import { useState } from "react";

import "./App.css";
import SearchCompany from "./Search";
import Contact from "./Footer";
import MultiActionAreaCard from "./Products";

function App() {
  return (
    <>
      <p className="read-the-docs ">
        <a
          href="https://www.gov.pl/web/rolnictwo/lista-firm-importujacych-zboze-z-ukrainy"
          target="_blank"
        >
          {" "}
          Źródło - Ministerstwo Rolnictwa i Rozwoju Wsi
        </a>
      </p>
      <SearchCompany />
      <MultiActionAreaCard />
      <Contact />
    </>
  );
}

export default App;
