const Timeline = ({ major, school, description, time }) => {
    return(
        <div className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
                <h3 className="text-lg font-semibold ">{school}</h3>
                <p className="">{major}</p>
                <p className="text-sm text-gray-600">{time}</p>
            {/* <p className="text-gray-700">{description}</p> */}
        </div>
    )
}

export default Timeline