import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import Nav1 from "./Components/Headder/Nav1";
import Best from './Components/BestCollection/Best';
import Blog from './Components/Blog/Blog';
import Btns from './Components/Btns/Btns';
import Feature from './Components/FeatureCollection/Feature';
import Foot from './Components/Foot/Foot';
import Headder2 from './Components/Headder2/Headder2';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup.mjs';
import Slide from './Components/Slide/Slide';
import Top from './Components/Top/Top';
import Trend from './Components/Trending/Trend';
import Product from './Components/productcategories/Product';
import Login from "./Components/Login/Login";

export default function App2() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route path="/set" element={<Signup />} />
          <Route path="/send" element={<Navbar />} />
          <Route path="/sell" element={<Headder2 />} />
          <Route path="/save" element={<Slide />} />
          <Route path="/stun" element={<Feature />} />
          <Route path="/ld" element={<Best />} />
          <Route path="/sd" element={<Trend />} />
          <Route path="/cc" element={<Product />} />
          <Route path="/dd" element={<Top />} />
          <Route path="/mm" element={<Blog />} />
          <Route path="/ww" element={<Btns />} />
          <Route path="/qq" element={<Foot />} />
        </Routes>
      </BrowserRouter>
      {/* <Nav1/>
      <Signup/>
      <div className="stic">
      <Navbar/>
      <Headder2/>
      </div>
      
      <Slide/>
      <Feature/>
      <Best/>
      <Trend/>
      <Product/>
      <Top/>
      <Blog/> */}
      
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />);
