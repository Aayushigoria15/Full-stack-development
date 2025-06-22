import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Services from "./Website/Pages/Services";
import Package from "./Website/Pages/Package";
import Blog from "./Website/Pages/Blog";
import Destination from "./Website/Pages/Destination";
import Gallery from "./Website/Pages/Gallery";
import Booking from "./Website/Pages/Booking";
import Contact from "./Website/Pages/Contact";
import Tour from "./Website/Pages/Tour";
import Testimonial from "./Website/Pages/Testimonial";
import Guides from "./Website/Pages/Guides";
import NotFound from "./Website/Pages/NotFound";
import Blogmanage from "./Admin/APages/Blogmanage";
import Dashboard from "./Admin/APages/Dashboard";
import BlogsAdd from "./Admin/APages/BlogsAdd";
import Guidsmanage from "./Admin/APages/Guidesmanage";
import Asidebar from "./Admin/AComman/Asidebar";
import Amain from "./Admin/AComman/Amain";
import Adminhome from "./Admin/APages/Adminhome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/pack" element={<Package />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/testi" element={<Testimonial />} />
            <Route path="/guide" element={<Guides />} />

            {/* Not found */}
            <Route path="*" element={<NotFound />} />

            {/* Admin side */}
            <Route path="/asidebar" element={<Asidebar />} />
            <Route path="/amain" element={<Amain />} />
            <Route path="/blogmanage" element={<Blogmanage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogsadd" element={<BlogsAdd />} />
            <Route path="/guidesmanage" element={<Guidsmanage />} />
            <Route path="/adminhome" element={<Adminhome />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
