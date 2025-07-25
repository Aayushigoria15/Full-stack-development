
import './AdminSidebar.css';
import { NavLink } from 'react-router-dom';
const Asidebar = () => {

    return (
        <div>
            <div className="admin-sidebar">
                <div className="sidebar-header">
                    <h2>Travela</h2>
                </div>
                <nav className="sidebar-menu ">
                    <NavLink to="/adminhome" className="nav-item nav-link">🏠Home</NavLink>
                    <NavLink to="/adminabout" className="nav-item nav-link">👥 About</NavLink>
                    <NavLink to="/adminservice" className="nav-item nav-link">📊 Service</NavLink>
                    <div className="nav-item  dropdown dropend " >
                        <div className="nav-link dropdown-toggle " style={{ color: "white" }} data-bs-toggle="dropdown" role="button" aria-expanded="false">
                            ⚙️ Blog
                        </div>
                        <div className="dropdown-menu" >
                            <NavLink to="/blogmanage" className="dropdown-item" id='end-item'>Blog Manage</NavLink>
                            <NavLink to="/blogsadd" className="dropdown-item" id='end-item'>Blog Add</NavLink>
                        </div>
                    </div>


                    <div className="nav-item dropdown dropend">
                        <div className="nav-link dropdown-toggle " style={{ color: "white" }} data-bs-toggle="dropdown" role="button" aria-expanded="false">Pages</div>
                        <div className="dropdown-menu">
                            {/* <NavLink to="/destination" className="dropdown-item">Destination</NavLink>
                            <NavLink to="/tour" className="dropdown-item">Explore Tour</NavLink>
                            <NavLink to="/booking" className="dropdown-item">Travel Booking</NavLink>
                            <NavLink to="/gallery" className="dropdown-item">Our Gallery</NavLink> */}
                            <NavLink to="/guidesmanage" className="dropdown-item" id='end-item'>Travel Guides</NavLink>
                            {/* <NavLink to="/testi" className="dropdown-item">Testimonial</NavLink> */}
                        </div>
                    </div>

                </nav>
                <div className="sidebar-footer">
                    <p>Logged in as: <strong> {localStorage.getItem("Aname")}</strong></p>
                    <p>Status: <span className="online-dot"></span> Online</p>
                </div>


            </div>
        </div>
    );
};



export default Asidebar
