import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";

const Navigate = () => {

    const drawerRef = useRef(null);

    const openDrawer = () => {
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
    },)

    
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
    
    
    if (isPending) {
        return <span>Loading...</span>
      }
    
    return (
        <div className="">
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
                    <div className="overflow-hidden relative">
                        {
                            !isLoading && totalCardCount > 0 ? (
                                <span className="right-0 absolute mr-6">{totalCardCount}</span>
                            ) : null
                        }
                        <img className="mb-2 transition-transform duration-500 ease-in-out group-hover:mt-[-4px]" src="https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-empty-large.png" alt="" />
                    </div>
                    {
                        totalPrice > 0 ? <span className="uppercase">Cart <span>${totalPrice}.00</span></span> : <span className="uppercase">Cart <span>$0.00</span></span>
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
                            <h2 className="text-3xl uppercase my-10 px-8">Shopping card</h2>
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
                                   <button className="btn btn-outline border-none hover:bg-white hover:text-black"> <RxCross1 /></button>
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
                                <button className="px-8 text-[16px] py-5 bg-[#dc9564] text-white uppercase">View Cart</button>
                                <button className="px-8 text-[16px] py-5 bg-[#91C6BE] text-white uppercase">CheckOut</button>
                            </div>
                        </div>
                    </ul>


                </div>
            </div>

        </div>
    );
};

export default Navigate;