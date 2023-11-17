import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Css 
import '../css/style.css';
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import RegisterPage from "./Pages/Register/RegisterPage";
import Product from "./Pages/Product/Product";
import Venue from "./Pages/Venue/Venue";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/profile/:userID' element={<Profile />}/>
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/product' element={<Product />} />
          <Route path='/venue/:id' element={<Venue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
