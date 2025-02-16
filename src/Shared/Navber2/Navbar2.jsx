import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitter } from "react-icons/fa";

const Navbar2 = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 1.5) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="hidden lg:block">
            <div className={`${isFixed ? "fixed top-0" : "absolute hidden top-[150vh]"} w-full z-50`}>
                <div className="bg-white flex justify-between items-center px-8 py-5 border-b">
                    <div className="start flex gap-1 items-center">
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/subscribe-icon.png" alt="" />
                        <p className="uppercase">NewsLatter</p>
                    </div>

                    <div className="center">
                        <ul className="flex gap-6 uppercase text-sm">
                            <li>Home</li>
                            <li>Pages</li>
                            <li>Shop</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className="end">
                        <div className="flex items-center gap-5">
                            <p className="flex items-center gap-1 text-lg"><span><FaSearch /></span> Search</p>
                            <div className="flex items-center gap-5">
                                <p><FaFacebook className="text-[#DB915E] text-lg" /></p>
                                <p><FaInstagram className="text-[#DB915E] text-lg" /></p>
                                <p><FaTwitter className="text-[#DB915E] text-lg" /></p>
                                <p><FaPinterest className="text-[#DB915E] text-lg" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;