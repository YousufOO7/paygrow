import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navbar2 from "../Shared/Navber2/Navbar2";

const Root = () => {
    return (
        <div>
            <Navbar2 />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;