import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Css 
import '../css/style.css';
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
