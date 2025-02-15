import { useRef } from "react";
import { RxCross1 } from "react-icons/rx";

const Navigate = () => {

    const drawerRef = useRef(null);

    const openDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = true;
        }
    };

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
                    <div className="overflow-hidden">
                        <img className="mb-2 transition-transform duration-500 ease-in-out group-hover:mt-[-4px]" src="https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-empty-large.png" alt="" />
                    </div>
                    <span className="uppercase">Cart <span>$0.00</span></span>
                </a>
            </div>


            <div className="drawer drawer-end z-[999] bg-while">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={drawerRef} />
                {/* <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                </div> */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-white text-base-content min-h-full w-[32vw]">
                        <div className="px-10  h-[70vh]">
                            <h2 className="text-3xl uppercase my-10">Shopping card</h2>

                            <div className="flex justify-between mt-5">
                                <div className="flex">
                                    <img src="" className="w-24 h-16 border " alt="" />

                                    <div className="text ml-5">
                                        <h2 className="text-[16px] font-semibold">sdvnslifpef</h2>
                                        <p className="text-gray-500 my-2">1 x <span>$320.00</span></p>
                                    </div>
                                </div>

                                <div>
                                    <RxCross1 />
                                </div>
                            </div>
                        </div>



                        <div className="h-[24vh]">
                            <div className="border-t-[1px]"></div>
                            <div className="flex justify-between items-center py-4 px-10">
                                <p className="uppercase">Total :</p>
                                <p className="text-gray-500">$320.00</p>
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