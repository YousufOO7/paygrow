// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
// import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import TitleShared from '../../../Shared/TitleShared/TitleShared';

const NewArrivals = () => {

    const {data: cards = [], refetch} = useQuery({
        queryKey: ['cards'], 
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/cards')
            return res.data.slice(4, 8)
        }
    })



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
                refetch();
                toast.success("Item Add Successfully!")
                // window.location.reload();
            }else if (res.data.modifiedCount > 0) {
                refetch();
                toast.success("Item Add Successfully!");
                // window.location.reload();
            }
        })
    }

    return (
        <div className="w-full bg-white my-20">
            <div>
                <TitleShared heading={"New Arrivals"} subHeading={"Consectetur adipiscing elit ut aliquam duis convalli convalli tellus id interdum ve."} />
            </div>

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

            <div className='my-20 max-w-6xl mx-auto px-12 lg:px-0'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        425: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 8,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=''>
                            <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/product-category-01.png" className='hover:border-2 hover:scale-95 transition-transform duration-500  border-dashed rounded-full p-[1px]' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/Product-Category-img-03.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/Product-Category-02.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/Product-Category-Img-07.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/product-category-06.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/product-category-05.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/product-category-04.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/product-category-01.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/Product-Category-img-03.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/Product-Category-02.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/Product-Category-Img-07.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/product-category-06.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/product-category-05.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/product-category-04.png" className='hover:border-2 hover:scale-95 transition-transform duration-500 border-dashed rounded-full p-[1px]' alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>


            <div className='max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-12 lg:px-0'>
                <div className='lg:w-[333px]'>
                    <div>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-4-745x1024.jpg" alt="" />
                    </div>

                    <div className='text-center'>
                        <h3 className="text-2xl lg:text-lg font-semibold my-3">Best baby environment setting</h3>
                        <p className='text-gray-500 mb-3 font-thin'>Metus aliquam eleifend mi in nulla cras sedo fel.</p>
                        <div className='flex justify-center pb-3'>
                            <button className='uppercase text-[#dc9564] font-semibold'>View Collection</button>
                        </div>
                    </div>
                </div>

                <div className='lg:w-[333px]'>
                    <div>
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-5-745x1024.jpg" alt="" />
                    </div>

                    <div className='text-center'>
                        <h3 className="text-2xl lg:text-lg font-semibold my-3">Make a dreamy nursery</h3>
                        <p className='text-gray-500 mb-3 font-thin'>Convallis a cras semper auctor neque vita teme.</p>
                        <div className='flex justify-center pb-3'>
                            <button className='uppercase text-[#dc9564] font-semibold'>View Collection</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewArrivals;