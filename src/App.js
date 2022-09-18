import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MainPage from "./components/mainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
