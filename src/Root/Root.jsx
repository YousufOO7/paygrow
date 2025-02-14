import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;