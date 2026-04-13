const categoryColors = {
    competition: "badge",
    competence: "badge-blue",
    course: "badge-green",
}

const Achivement = ({ image, name, organizer, category }) => {
    return (
        <div className="glass-card w-72 flex flex-col overflow-hidden group">
            <div className="relative overflow-hidden rounded-xl mb-3">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className={`badge ${categoryColors[category] || "badge"} absolute bottom-2 left-2`}>{category}</span>
            </div>
            <div className="p-3">
                <h3 className="font-semibold text-white text-sm leading-snug">{name}</h3>
                <p className="text-xs text-slate-400 mt-1">{organizer}</p>
            </div>
        </div>
    )
}

export default Achivement
