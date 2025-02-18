import { useEffect, useState } from "react";
import TitleShared from "../../../Shared/TitleShared/TitleShared";
import axios from "axios";
import { toast } from "react-toastify";


const Baskets = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/cards')
            .then(res => {
                setCards(res.data.slice(0, 4))
            })
    }, [])

     // add to shop card
     const handleAddToCard = async (card) => {
        // console.log(card)

        const carriage = {
            image: card.image,
            name: card.name,
            tag: card.tag,
            price: card.price,
            cardId: card._id
        }

         await axios.post("http://localhost:3000/addCarriage", carriage)
        .then(res => {
            if(res.data.insertedId){
                toast.success("Item Add Successfully!")
                window.location.reload();
            }else if (res.data.modifiedCount > 0) {
                toast.success("Item Add Successfully!");
                window.location.reload();
            }
        })
    }

    return (
        <div>
            <TitleShared heading={"CRIBS & BASKETS"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp."} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10 px-12 lg:px-0">
                {
                    cards.map(card => (
                        <div key={card._id} className="lg:w-[252px] group  border-2 rounded-3xl group hover:border-dashed">
                            <div className="p-2 flex justify-center">
                                <img src={card.image} className='h-[40vh] group-hover:scale-105 transition-transform duration-500 ease-linear' alt="" />
                            </div>
                            <div className="text-center mt-3">
                                <p className="text-[12px] text-gray-500 uppercase">{card.tag}</p>
                                <h3 className="text-xl">{card.name}</h3>
                                <p className="text-gray-500 mt-2 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:translate-y-2">
                                    $ {card.price}.00
                                </p>

                                <button onClick={() => handleAddToCard(card)} className="opacity-0 scale-90 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-5 text-[#DC9564]">
                                    Add to cart
                                </button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Baskets;