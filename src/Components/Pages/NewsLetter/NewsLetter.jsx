import { FaGreaterThan } from "react-icons/fa";


const NewsLetter = () => {
    return (
        <div
            style={{
                backgroundImage: "url('https://playgrow.qodeinteractive.com/wp-content/uploads/2023/01/h1-back-img-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "764px"
            }}
            className="mb-10 flex items-center"
        >


            <div className="bg-white mx-auto md:w-[440px] h-[440px] p-10 md:ml-40">
                <h2 className="text-center font-semibold text-2xl uppercase">NewsLetter</h2>
                <p className="text-center font-thin text-lg mt-3">Risus viverra adipiscing at in tellus.</p>

                <div className="space-y-8 mt-10">
                    <div className="border py-3">
                        <input type="text" placeholder="Your Name" className="ml-3 focus:outline-none" />
                    </div>
                    <div className="border py-3">
                        <input type="text" placeholder="Your Name" className="ml-3 focus:outline-none" />
                    </div>
                    <div className="border py-3 text-center bg-[#E38443] group text-white">
                        <div className="flex items-center justify-center">
                            <input type="button" value="Send Message" className="uppercase font-semibold" />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                                <FaGreaterThan className="group-hover:ml-3 hover:block transition-transform duration-700 ease-in-out" />
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NewsLetter;