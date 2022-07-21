
import './App.css';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/watch" element={<Watch />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <Blog/> */}
    </div>
  );
}

export default App;



