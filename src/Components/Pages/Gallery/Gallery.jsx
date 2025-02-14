import axios from "axios";
import { useEffect, useState } from "react";


const Gallery = () => {

    const [galleryImg, setGalleryImg] = useState([]);

    useEffect(() => {
        axios.get('./gallery.json')
        .then(res => {
            setGalleryImg(res.data)
        })
    }, [])

    return (
        <div className="w-full bg-[#F7F3F0] h-[860px]">
            <div className="flex justify-between">
                <div>
                    <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-22.png" alt="" className="mt-10 ml-5" />
                </div>

                <div>
                    <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-24.png" alt="" />
                </div>
            </div>

            <div className="-mt-20">
                <h2 className="text-3xl font-semibold text-center my-5 uppercase">CHECK OUT OUR GALLERY</h2>
                <p className="text-lg font-thin w-3/6 mx-auto">Iaculis nunc sed augue lacus viverra vitae congue. Vitae congue eu consequat ac.</p>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 mt-12 px-16">
            {
                galleryImg.map(img => (
                    <div key={img.id}>
                        <img src={img.image} alt="" />
                    </div>
                ))
            }
           </div>

           <div className="ml-12 mt-5">
            <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/main-img-27.png" alt="" />
           </div>

        </div>
    );
};

export default Gallery;