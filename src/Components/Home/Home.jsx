import Carousel from "../Pages/Carousel/Carousel";
import Navbar from "../Pages/Navbar/Navbar";
import Navigate from "../Pages/Navigate/Navigate";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Navigate />
            <Carousel />
        </div>
    );
};

export default Home;