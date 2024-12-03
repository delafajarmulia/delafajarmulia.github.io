const Achivement = ({ image, name, organizer, category }) => {
    return(
        <div className="w-72 min-h-80 rounded-lg border border-gray-400 p-3 hover:border-gray-500 hover:shadow-lg">
            <img 
                src={image} 
                alt={image} 
                loading="lazy"
                className="w-auto rounded-md mx-auto" 
            />
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm">{organizer}</p>
            <h5 className="text-xs font-semibold bg-blue-100 w-fit px-1.5 py-0.5 rounded-md mt-3">{category}</h5>
        </div>
    )
}

export default Achivement