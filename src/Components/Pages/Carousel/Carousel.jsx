// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import "aos/dist/aos.css";
import Aos from 'aos';

const Carousel = () => {

    Aos.init({
        duration: 1000,
        once: false,
    });

    return (
        <div className='max-w-6xl mx-auto mb-20 mt-5 md:mt-10 lg:mt-0 px-5 md:px-12 lg:px-0'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='relative'>
                        {/* <div data-aos="fade-up" className='absolute top-[10%] '>
                            <div className='overflow-hidden'>
                                <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2023/01/MAINHOME-REV-FIGURE-SLIDE-2.png" className='relative overflow-hidden' alt="" />

                               
                                <h2 className='absolute top-[24vh] uppercase left-[16vh] text-3xl tracking-widest font-bold'>Your Happy Place</h2>
                                <p className='absolute text-gray-500 top-[32vh] uppercase left-[8vh] text-sm w-5/6 mx-auto text-center'>sunt in culpa qui officia deserent mollit anim id est laborum</p>

                                <a href="#" className='uppercase absolute text-[#DB9360] font-medium top-[44vh] left-[35vh] text-center'>Read More</a>

                            </div>
                        </div> */}

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