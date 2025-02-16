import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navbar2 from "../Shared/Navber2/Navbar2";
import MdNavabar from "../Shared/MdNavabar/MdNavabar";

const Root = () => {
    return (
        <div>
            <div className="lg:hidden"><MdNavabar /> </div>
            <Navbar2 />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;