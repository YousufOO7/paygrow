import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";

const Navigate = () => {

    const drawerRef = useRef(null);

    const openDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = true;
        }
    };
    const closeDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = false;
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
        console.log(id);
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



    // if (isLoading || isPending) {
    //     return <span>Loading...</span>;
    // }

    return (
        <div className="hidden lg:block">
            <div className="flex justify-between px-32 py-20 items-center">

                <a href="#" className="group">
                    <div className="overflow-hidden">
                        <img
                            className="mb-2 transition-transform duration-500 ease-in-out group-hover:mt-[-4px]"
                            src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/rainbow.png"
                            alt=""
                        />
                    </div>
                    <span className="uppercase ml-5">New In</span>
                </a>
                <a href="#" className="group">
                    <div className="overflow-hidden">
                        <img className="mb-2 transition-transform duration-500 ease-in-out group-hover:mt-[-4px]" src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/star.png" alt="" />
                    </div>
                    <span className="uppercase">About Us</span>
                </a>

                <a href="" className="group">
                    <img className="w-48 transition-transform duration-500 ease-in-out group-hover:mt-[-4px]" src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/logo-img-1.png" alt="" />
                </a>

                <a href="#" className="group">
                    <div className="overflow-hidden">
                        <img className="mb-2 transition-transform duration-500 ease-in-out group-hover:mt-[-4px]" src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/hearth.png" alt="" />
                    </div>
                    <span className="uppercase">WishList</span>
                </a>

                <a className="group" onClick={openDrawer}>
                    {isLoading || isPending ? (
                        <span>Loading...</span>
                    ) : (
                        <div className="overflow-hidden relative">
                            {totalCardCount > 0 && (
                                <span className="right-0 absolute mr-6">{totalCardCount}</span>
                            )}

                            <img
                                className="mb-2 transition-transform duration-500 ease-in-out group-hover:mt-[-4px]"
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
                            <span className="uppercase text-sm">Card <span>${totalPrice}.00</span></span>
                            : <span className="uppercase text-sm">Card <span>$00.00</span></span>
                    }
                </a>

            </div>


            <div className="drawer drawer-end z-[999] bg-while">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={drawerRef} />
                {/* <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                </div> */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-white text-base-content min-h-full w-[30vw]">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl uppercase my-10 px-8">Shopping card</h2>
                            <button onClick={closeDrawer} className="text-xl btn-outline hover:bg-white hover:text-black mr-5">X</button>
                        </div>
                        <div className="h-[58vh]">
                            {
                                shopCard.length > 0 ? shopCard.map(shop => (
                                    <div key={shop._id} className="flex justify-between px-5">
                                        <div className="flex">
                                            <img src={shop.image} className="w-24 h-24 overflow-hidden -mt-3" alt="" />

                                            <div className="text ml-5">
                                                <h2 className="text-[16px] font-semibold">{shop.name}</h2>
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
                                    : <p className="text-gray-500 px-10">There no Product in is card</p>
                            }

                        </div>



                        {
                            shopCard.length > 0 ? <div className="h-[24vh]">
                            <div className="border-t-[1px]"></div>
                            <div className="flex justify-between items-center py-4 px-10">
                                <p className="uppercase">Total :</p>
                                <p className="text-gray-500">${totalPrice}.00</p>
                            </div>
                            <div className="border-b-[1px]"></div>

                            <div className="flex mt-6 justify-evenly">
                                <button className="px-8 text-[16px] py-5 bg-[#dc9564] text-white uppercase">View Cart</button>
                                <button className="px-8 text-[16px] py-5 bg-[#91C6BE] text-white uppercase">CheckOut</button>
                            </div>
                        </div>
                        :
                        null
                        }
                    </ul>


                </div>
            </div>

        </div>
    );
};

export default Navigate;