
const Navigate = () => {
    return (
        <div className="flex justify-between px-32 my-20 items-center">

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

            <a href="#" className="group">
                <div className="overflow-hidden">
                    <img className="mb-2 transition-transform duration-500 ease-in-out group-hover:mt-[-4px]" src="https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-empty-large.png" alt="" />
                </div>
                <span className="uppercase">Cart <span>$0.00</span></span>
            </a>

        </div>
    );
};

export default Navigate;