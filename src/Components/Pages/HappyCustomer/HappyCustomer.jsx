import { useEffect, useState } from "react";
import axios from "axios";

const HappyCustomer = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('./customers.json')
            .then(res => {
                setCustomers(res.data)
            })
    }, [])

    return (
        <div className="mt-20 bg-[#F7F3F0] lg:h-screen md:h-full">
            <div className="pt-10">
                <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-1.png" alt="" />
            </div>

            <h1 className="uppercase text-center text-4xl font-semibold">Happy Customers</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 px-8 md:px-20">
                {
                    customers.map((customer, idx) => <div key={idx} className="text-center space-y-3">
                        <p className="flex justify-center"><img src={customer.image} alt="stars" /></p>
                        <h2 className="font-semibold text-2xl lg:w-5/6 mx-auto">{customer.review}</h2>

                        <p className="text-gray-500"><span>{customer.name}</span> <span>{customer.location}</span></p>
                    </div>)
                }
            </div>
            <div className="flex justify-end mr-5">
                <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-3.png" alt="" />
            </div>
                <div className="flex justify-end mr-5">
                    <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-2.png" alt="" />
                </div>
        </div>
    );
};

export default HappyCustomer;