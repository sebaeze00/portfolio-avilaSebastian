import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <section id="center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>

    </>
  );
}

export default App;
