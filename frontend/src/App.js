import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import './App.css';
import Best from './Components/BestCollection/Best';
import Blog from './Components/Blog/Blog';
import Btns from './Components/Btns/Btns';
import Feature from './Components/FeatureCollection/Feature';
import Foot from './Components/Foot/Foot';
import Nav1 from './Components/Headder/Nav1';
import Headder2 from './Components/Headder2/Headder2';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup.mjs';
import Slide from './Components/Slide/Slide';
import Top from './Components/Top/Top';
import Trend from './Components/Trending/Trend';
import Product from './Components/productcategories/Product';
import Cart from "./Components/Cart/Cart";
import OnFeature from "./Components/FeatureCollection/onfeature";

function App() {
  return (
    <div className="App">
        
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
      <Blog/>
      <Btns/>
      <Foot/> */}
      <BrowserRouter>
      <Nav1/>
      <Signup/>
      <div className="stic">
      <Navbar/>
      <Headder2/>
      </div>
        <Routes>
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/onfeature" element={<OnFeature />} />
          
        </Routes>
        <Slide/>
      <Feature/>
      <Best/>
      <Trend/>
      <Product/>
      <Top/>
      <Blog/>
      <Btns/>
      <Foot/>
      {/* <OnFeature/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;



// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

