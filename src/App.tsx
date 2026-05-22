import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LanguageSwitcher from "./components/ui/ButtonLanguage";

function App() {
  return (
    <>
      <div className="mr-5 mt-8 flex justify-end ">
        <LanguageSwitcher />
      </div>
      <section id="center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
