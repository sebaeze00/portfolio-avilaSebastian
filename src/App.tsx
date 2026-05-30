import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LanguageSwitcher from "./components/ui/ButtonLanguage";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <div className="mr-5 mt-8 flex justify-end ">
        <LanguageSwitcher />
      </div>
      <section id="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
