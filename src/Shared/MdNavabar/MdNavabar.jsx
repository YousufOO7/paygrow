import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";


const MdNavabar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };


    const drawerRef = useRef(null);

    const openCardDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = true;
        }
    };
    const closeCardDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = true;
        }
    };


    const { data: shopCard = [], refetch, isLoading, isPending } = useQuery({
        queryKey: ['shopCard'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/shopCard")
            return res.data
        }
    })


    // Refetch data after any update
    useEffect(() => {
        if (shopCard.length > 0) {
            refetch();
        }
    }, [shopCard, refetch]);

    const totalPrice = shopCard.reduce((total, item) => {
        return total + (item.price * (item.cardCount || 1))
    }, 0);

    const totalCardCount = shopCard.reduce((total, item) => {
        return total + (item.cardCount || 1);
    }, 0);


    // handle delete item from shopping card
    const handleDeleteItem = async (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`http://localhost:3000/shopCard/${id}`);

                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }
                } catch (error) {
                    console.error("Error deleting item:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong while deleting the item.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <div>
            <div className="navbar bg-base-100 border-b px-5 md:px-12 py-3">
                <div className="navbar-start">
                    <a > <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/logo-img-1.png" alt="" className="w-28" /></a>
                </div>



                <div className="navbar-end flex items-center">

                    <div className="">
                        <a className="flex items-center mr-5" onClick={openCardDrawer}>
                            {isLoading || isPending ? (
                                <span>Loading...</span>
                            ) : (
                                <div className="overflow-hidden relative">
                                    {totalCardCount > 0 && (
                                        <span className="right-0 absolute text-xs md:mr-6">{totalCardCount}</span>
                                    )}

                                    <img
                                        className="mb-2 w-20 md:w-14"
                                        src={
                                            totalCardCount > 0
                                                ? "https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-full-large.png"
                                                : "https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-empty-large.png"
                                        }
                                        alt="Cart"
                                    />
                                </div>
                            )}

                            {
                                totalPrice > 0 ?
                                    <div className="flex items-center"><span className="uppercase text-xs md:text-sm">Card </span> <span>${totalPrice}.00</span></div>
                                    : <div className="flex items-center gap-1">
                                        <span className="uppercase text-xs md:text-sm">Card </span>
                                        <span>$00.00</span>
                                    </div>
                            }
                        </a>
                    </div>




                    {/* drop down nav link */}
                    <div className="relative z-[999]">
                        {/* Trigger Button */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={openDrawer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        {/* Custom Top-to-Bottom Drawer */}
                        <div
                            className={`fixed top-0 left-0 w-full py-10 bg-white transition-transform duration-500 ease-in-out ${isDrawerOpen ? "translate-y-0" : "-translate-y-full"
                                }`}
                        >
                            {/* Close Button */}
                            <div className="flex justify-end p-4">
                                <button onClick={closeDrawer} className="text-xl btn-outline hover:bg-white hover:text-black mr-10">
                                    X
                                </button>
                            </div>

                            {/* Sidebar Items */}
                            <ul className="px-5 space-y-14 text-sm">
                                <li className="relative group">
                                    <a className="cursor-pointer">Home</a>

                                    {/* Dropdown Menu */}
                                    <ul className="absolute left-0 top-full pt-5 hidden group-hover:block bg-white shadow-md rounded-md w-40 z-50">
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
                                    <ul className="absolute left-0 top-full pt-5 hidden group-hover:block bg-white shadow-md rounded-md w-40 z-50">
                                        <li className="px-4 py-2 hover:bg-gray-100"><a>About Us</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a>FAQ Page</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a>Contact Us</a></li>
                                    </ul>
                                </li>

                                <li className="relative group">
                                    <a className="cursor-pointer">SHOP</a>

                                    {/* Main Dropdown Menu */}
                                    <ul className="absolute left-0 top-full pt-2 hidden group-hover:block bg-white shadow-md rounded-md w-40 z-50">
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
                    </div>
                </div>
            </div>



            {/* show side shopping card */}
            <div className="drawer drawer-end z-[999] bg-white">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={drawerRef} />
                {/* <div className="drawer-content">
                                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                            </div> */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-white text-base-content min-h-full w-[70vw] md:w-[50vw]">
                        <h2 className="text-xl md:text-3xl uppercase my-10 px-8">Shopping card</h2>
                        <div className="h-[40vh]">
                            {
                                shopCard.length > 0 ? shopCard.map(shop => (
                                    <div key={shop._id} className="flex justify-between px-5">
                                        <div className="flex">
                                            <img src={shop.image} className="w-24 h-24 overflow-hidden -mt-3" alt="" />

                                            <div className="text ml-5">
                                                <h2 className="md:text-[16px] font-semibold">{shop.name}</h2>
                                                {
                                                    shop.cardCount > 1 ? <p className="text-gray-500 my-2">{shop.cardCount} x <span>${`${shop.cardCount * shop.price}`}.00</span></p>

                                                        : <p className="text-gray-500 my-2">1 x <span>${shop.price}.00</span></p>
                                                }
                                            </div>
                                        </div>

                                        <div>
                                            <button onClick={() => handleDeleteItem(shop._id)} className="btn btn-outline border-none hover:bg-white hover:text-black"> <RxCross1 /></button>
                                        </div>
                                    </div>
                                ))
                                    : null
                            }

                        </div>



                        <div className="h-[24vh]">
                            <div className="border-t-[1px]"></div>
                            <div className="flex justify-between items-center py-4 px-10">
                                <p className="uppercase">Total :</p>
                                <p className="text-gray-500">${totalPrice}.00</p>
                            </div>
                            <div className="border-b-[1px]"></div>

                            <div className="flex mt-6 justify-evenly">
                                <button className="px-5 py-3 md:px-8 md:text-[16px] md:py-5 bg-[#dc9564] text-white uppercase">View Cart</button>
                                <button className="px-5 py-3 md:px-8 md:text-[16px] md:py-5 bg-[#91C6BE] text-white uppercase">CheckOut</button>
                            </div>
                        </div>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default MdNavabar;