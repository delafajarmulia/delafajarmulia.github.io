const Skill = ({logo, name}) => {
    return(
        <div className="w-40 h-28 flex flex-col justify-center items-center rounded-lg border border-gray-400 hover:border-blue-950">
            <img 
                src={logo} 
                alt={`${logo} name`} 
                loading="lazy"
                className="w-14"
            />
            <p className="font-semibold pt-1">{name}</p>
        </div>
    )
}

export default Skill