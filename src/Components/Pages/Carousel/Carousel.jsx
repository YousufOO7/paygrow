// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const Carousel = () => {
    return (
        <div className='max-w-6xl mx-auto mb-20'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='relative'>
                        <div className='bg-red-600 absolute left-52 top-[30%] w-[200px] h-[200px]'></div>                       
                            <img src="https://freerangestock.com/sample/145870/a-young-african-mother-raises-her-children-and-plays-with-them.jpg" className='w-full bg-cover h-[500px]' alt="" />                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full bg-cover h-[500px]' src="https://plus.unsplash.com/premium_photo-1684742263688-5204bc53fb52?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMHRveXN8ZW58MHx8MHx8fDA%3D" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full bg-cover h-[500px]' src="https://www.ikea.com/images/a-girl-sitting-on-a-green-desk-chair-doing-her-homework-on-a-96cc61f9a78360f9ba2c0a791e09332e.jpg?f=s" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;