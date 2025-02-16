import { FaFacebook, FaGreaterThan, FaInstagram, FaPinterest, FaSearch, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="hidden lg:block">
            <div className="bg-[#F7F3F0] flex justify-between items-center px-8 py-3">
                <div className="start flex gap-1 items-center">
                    <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/subscribe-icon.png" alt="" />
                    <p className="uppercase">NewsLatter</p>
                </div>

                <div className="center">
                    <ul className="flex space-x-14 text-sm">
                        <li className="relative group">
                            <a className="cursor-pointer">Home</a>

                            {/* Dropdown Menu */}
                            <ul className="absolute left-0 top-full pt-5 hidden group-hover:block bg-white shadow-md rounded-md w-40">
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Main Home</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Kids Store</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Baby Shop</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Shop Grid</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Landing</a></li>
                            </ul>
                        </li>

                        <li className="relative group">
                            <a className="cursor-pointer">PAGES</a>

                            {/* Dropdown Menu */}
                            <ul className="absolute left-0 top-full pt-5 hidden group-hover:block bg-white shadow-md rounded-md w-40">
                                <li className="px-4 py-2 hover:bg-gray-100"><a>About Us</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>FAQ Page</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Contact Us</a></li>
                            </ul>
                        </li>

                        <li className="relative group">
                            <a className="cursor-pointer">SHOP</a>

                            {/* Main Dropdown Menu */}
                            <ul className="absolute left-0 top-full pt-2 hidden group-hover:block bg-white shadow-md rounded-md w-40">
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Shop List</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Shop Single</a></li>

                                {/* Nested Dropdown Trigger */}
                                <li className="relative px-4 py-2 hover:bg-gray-100 group/submenu">
                                    <div className="flex items-center gap-2">
                                        <a className="cursor-pointer">Shop Layouts </a>
                                        <span> <FaGreaterThan className="font-thin" /> </span>
                                    </div>

                                    {/* Nested Submenu */}
                                    <ul className="absolute left-full top-0 hidden group-hover/submenu:block bg-white shadow-md rounded-md w-40 ">
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Three Columns</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Four Columns</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Five Columns</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Six Columns</a></li>
                                    </ul>
                                </li>

                                <li className="relative px-4 py-2 hover:bg-gray-100 group/submenu">
                                    <div className="flex items-center gap-2">
                                        <a className="cursor-pointer">Shop Pages </a>
                                        <span> <FaGreaterThan className="font-thin" /> </span>
                                    </div>

                                    {/* Nested Submenu */}
                                    <ul className="absolute left-full top-0 hidden group-hover/submenu:block bg-white shadow-md rounded-md w-40 ">
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>My Account</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Wishlist</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Cart</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Checkout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>


                        <li className="relative group">
                            <a className="cursor-pointer">BLOG</a>

                            {/* Dropdown Menu */}
                            <ul className="absolute left-0 top-full pt-5 hidden group-hover:block bg-white shadow-md rounded-md w-40">
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Right Sidebar</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Left Sidebar</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>No Sidebar</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a>Masonry List</a></li>
                                <li className="relative px-4 py-2 hover:bg-gray-100 group/submenu">
                                    <div className="flex items-center gap-2">
                                        <a className="cursor-pointer">Post Types </a>
                                        <span> <FaGreaterThan className="font-thin" /> </span>
                                    </div>

                                    {/* Nested Submenu */}
                                    <ul className="absolute left-full top-0 hidden group-hover/submenu:block bg-white shadow-md rounded-md w-40  z-50">
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Standard Post</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>No Sidebar Post</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Gallery Post</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Audio Post</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Video Post</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Quote Post</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-black"><a>Link Post</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

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
    );
};

export default Navbar;