import { FaFacebook, FaInstagram, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-white h-[70vh] p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-16">
                <div>
                    <h3 className="text-xl uppercase">Company</h3>
                    <div className="space-y-2 mt-4">
                        <li className="text-gray-500 hover:text-black text-[15px]">About PlayGrow</li>
                        <li className="text-gray-500 hover:text-black text-[15px]">Our Experts</li>
                        <li className="text-gray-500 hover:text-black text-[15px]">Services & Prices</li>
                        <li className="text-gray-500 hover:text-black text-[15px]">Latest News</li>
                        <li className="text-gray-500 hover:text-black text-[15px]">FAQ</li>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl uppercase">CUSTOMERS</h3>
                    <div className="space-y-2 mt-4">
                        <li className="text-gray-500 hover:text-black text-[15px]">Read Our Advice</li>
                        <li className="text-gray-500 hover:text-black text-[15px]">Get In Touch</li>
                        <li className="text-gray-500 hover:text-black text-[15px]">Online Store</li>
                        <li className="text-gray-500 hover:text-black text-[15px]">Terms & Conditions</li>
                        <li className="text-gray-500 hover:text-black text-[15px]">Ask Away</li>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl uppercase">SOCIAL MEDIA</h3>
                    <div className="space-y-2 mt-4">
                        <div className="flex items-center group gap-2">
                            <p><FaTwitter className="group-hover:text-[#DB915E] text-gray-500" /></p>
                            <p className="text-gray-500 group-hover:text-black text-[15px]">Twiter</p>
                        </div>
                        <div className="flex items-center group gap-2">
                            <p><FaInstagram className="group-hover:text-[#DB915E] text-gray-500" /></p>
                            <p className="text-gray-500 group-hover:text-black text-[15px]">Instagram</p>
                        </div>
                        <div className="flex items-center group gap-2">
                            <p><FaFacebook className="group-hover:text-[#DB915E] text-gray-500" /></p>
                            <p className="text-gray-500 group-hover:text-black text-[15px]">Facebook</p>
                        </div>
                        <div className="flex items-center group gap-2">
                            <p><FaPinterest className="group-hover:text-[#DB915E] text-gray-500" /></p>
                            <p className="text-gray-500 group-hover:text-black text-[15px]">Pinterest</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl uppercase">CONTACT</h3>
                    <div className="space-y-2 mt-4">
                        <p className="text-gray-500 hover:text-black text-[15px]">Monday to Friday 9 a.m. - 5 p.m.</p>
                        <div className="flex items-center group gap-2">
                            <p><FaPhone className="group-hover:text-[#DB915E] text-gray-500" /></p>
                            <p className="text-gray-500 group-hover:text-black text-[15px]">012 34 567 8912</p>
                        </div>
                        <div className="flex items-center group gap-2">
                            <p><FaPhone className="group-hover:text-[#DB915E] text-gray-500" /></p>
                            <p className="text-gray-500 group-hover:text-black text-[15px]">123 45 678 9123</p>
                        </div>
                        <div className="flex items-center group gap-2">
                            <p><MdOutlineMail className="group-hover:text-[#DB915E] text-gray-500" /></p>
                            <p className="text-gray-500 group-hover:text-black text-[15px]">playgrow@qodeinteractive.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between px-16 mt-28">
                <div className="flex gap-6 items-center">
                    <div>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/footer-logo-img-1.png" className="w-36" alt="" />
                    </div>
                    <p className="text-sm text-gray-500">© 2023 Qode Interactive, All Rights Reserved</p>
                </div>

                <div>
                    <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/footer-img-1.png" className="w-60" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;