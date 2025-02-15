import Baskets from "../Pages/Baskets/Baskets";
import Carousel from "../Pages/Carousel/Carousel";
import Gallery from "../Pages/Gallery/Gallery";
import HappyCustomer from "../Pages/HappyCustomer/HappyCustomer";
import Navbar from "../Pages/Navbar/Navbar";
import Navigate from "../Pages/Navigate/Navigate";
import NewArrivals from "../Pages/NewArrivals/NewArrivals";
import NewsLetter from "../Pages/NewsLetter/NewsLetter";
import ReadBlog from "../Pages/ReadBlog/ReadBlog";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Navigate />
            <Carousel />
            <Baskets />
            <ReadBlog />
            <HappyCustomer />
            <NewsLetter />
            <NewArrivals />
            <Gallery />
        </div>
    );
};

export default Home;