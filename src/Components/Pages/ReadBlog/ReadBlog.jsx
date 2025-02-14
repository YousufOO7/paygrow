import TitleShared from "../../../Shared/TitleShared/TitleShared";


const ReadBlog = () => {
    return (
        <div className="my-20">
            <TitleShared heading={"READ OUR BLOG"} subHeading={"Dignissim enim sit amet venenatis urna convallis ae nean et tortor etiam non qu."} />

            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto my-10 gap-5">
                <div className="w-[340px] group">
                    <div className="relative">
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/b-m-l-img-1-768x595.jpg" className="group-hover:scale-105 transition-transform duration-700 ease-linear " alt="" />
                        <div className="w-16 h-16 rounded-md text-center p-1 bg-white absolute top-5 left-2">
                            <h2 className="text-2xl text-[#dc9564] font-bold">5</h2>
                            <h2 className="font-semibold">May</h2>
                        </div>

                    </div>
                    <h2 className="text-xl font-semibold my-3">Fun colourful cutlery for toddlers to more enjoy dining</h2>

                    <p className="text-gray-500 mb-2">Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum. Sed risus ultricies tristique nulla aliquet.</p>
                    <a href="" className="text-[#dc9564] my-3 uppercase">React more</a>
                </div>

                <div className="w-[340px] group">
                    <div className="relative">
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/b-m-l-img-2-650x650.jpg" className="group-hover:scale-105 transition-transform duration-700 ease-linear" alt="" />

                        <div className="w-16 h-16 rounded-md text-center p-1 bg-white absolute top-5 left-2">
                            <h2 className="text-2xl text-[#dc9564] font-bold">9</h2>
                            <h2 className="font-semibold">May</h2>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold my-3">Fun childhood with furry toys ready for best cuddles</h2>

                    <p className="text-gray-500 mb-2">Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum. Sed risus ultricies tristique nulla aliquet.</p>
                    <a href="" className="text-[#dc9564] my-3 uppercase">React more</a>
                </div>

                <div className="w-[340px] group">
                    <div className="relative">
                        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/b-m-l-img-3-768x499.jpg" className="group-hover:scale-105 transition-transform duration-700 ease-linear" alt="" />

                        <div className="w-16 h-16 rounded-md text-center p-1 bg-white absolute top-5 left-2">
                            <h2 className="text-2xl text-[#dc9564] font-bold">13</h2>
                            <h2 className="font-semibold">May</h2>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold my-3">Dotted design summertime swimsuit collection for toddlers</h2>

                    <p className="text-gray-500 mb-2">Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum. Sed risus ultricies tristique nulla aliquet.</p>
                    <a href="" className="text-[#dc9564] my-3 uppercase">React more</a>
                </div>
            </div>
        </div>

    );
};

export default ReadBlog;