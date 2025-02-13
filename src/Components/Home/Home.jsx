import Carousel from "../Pages/Carousel/Carousel";
import HappyCustomer from "../Pages/HappyCustomer/HappyCustomer";
import Navbar from "../Pages/Navbar/Navbar";
import Navigate from "../Pages/Navigate/Navigate";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Navigate />
            <Carousel />
            <HappyCustomer />
        </div>
    );
};

export default Home;