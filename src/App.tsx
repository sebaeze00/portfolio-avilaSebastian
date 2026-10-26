import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LanguageSwitcher from "./components/ui/ButtonLanguage";
import Error from "./pages/Error";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import Practice from "./pages/Practice";

function App() {
  return (
    <>
      <div className="mr-5 mt-8 flex justify-end ">
        <LanguageSwitcher />
      </div>
      <section id="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
