import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/starred" element={<Starred />}></Route>
          <Route path="/show/:id" element={<Show />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
