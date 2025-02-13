import Carousel from "../Pages/Carousel/Carousel";
import HappyCustomer from "../Pages/HappyCustomer/HappyCustomer";
import Navbar from "../Pages/Navbar/Navbar";
import Navigate from "../Pages/Navigate/Navigate";
import NewsLetter from "../Pages/NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Navigate />
            <Carousel />
            <HappyCustomer />
            <NewsLetter />
        </div>
    );
};

export default Home;