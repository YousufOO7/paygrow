import axios from "axios";
import { useEffect, useState } from "react";
import TitleShared from "../../../Shared/TitleShared/TitleShared";


const Gallery = () => {

    const [galleryImg, setGalleryImg] = useState([]);

    useEffect(() => {
        axios.get('./gallery.json')
        .then(res => {
            setGalleryImg(res.data)
        })
    }, [])

    return (
        <div className="w-full bg-[#F7F3F0] h-full lg:h-[900px]">
            <div className="flex justify-between">
                <div>
                    <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-22.png" alt="" className="mt-10 ml-5" />
                </div>

                <div>
                    <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-24.png" alt="" />
                </div>
            </div>

            <div className="-mt-20">
                <TitleShared heading={"CHECK OUT OUR GALLERY"} subHeading={"Iaculis nunc sed augue lacus viverra vitae congue. Vitae congue eu consequat ac."} />
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-8 gap-2 mt-12 md:px-16 lg:px-20">
            {
                galleryImg.map(img => (
                    <div key={img.id} className="group">
                        <img className="group-hover:scale-105 w-full transition-transform duration-500 ease-linear" src={img.image} alt="" />
                    </div>
                ))
            }
           </div>

           <div className="ml-12 mt-5 ">
            <img 
            
            src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-27.png" alt="" />
           </div>

        </div>
    );
};

export default Gallery;