const Skill = ({ logo, name }) => {
    return (
        <div className="glass-card w-32 h-24 flex flex-col justify-center items-center gap-2 cursor-default group">
            <img
                src={logo}
                alt={name}
                loading="lazy"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">{name}</p>
        </div>
    )
}

export default Skill
