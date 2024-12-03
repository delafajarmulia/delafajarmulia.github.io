const Project = ({ image, name, desc, category, stacks, linkRepo, linkDeploy }) => {
    return(
        <div className="w-72 min-h-72 rounded-lg border border-gray-400 p-3">
            <img 
                src={image} 
                alt={image} 
                loading="lazy"
                className="w-auto rounded-md mx-auto" 
            />
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm">{desc}</p>
            <h5 className="text-xs font-semibold bg-blue-100 w-fit px-1.5 py-0.5 rounded-md mt-3">{category}</h5>
            <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">{stacks}</div>
                <div className="flex items-center justify-center  gap-1">
                    {linkRepo}
                    {linkDeploy}
                </div>
            </div>
        </div>
    )
}

export default Project