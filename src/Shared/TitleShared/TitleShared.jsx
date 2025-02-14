

const TitleShared = ({subHeading, heading}) => {
    return (
        <div className="my-10 text-center">
            <div className="md:w-3/12 lg:w-4/12 mx-auto text-center my-3">
            <h3 className="text-bold text-3xl py-2">{heading}</h3>
            <p className="text-gray-500 mt-2">{subHeading}</p>
        </div>
        </div>
    );
};

export default TitleShared;