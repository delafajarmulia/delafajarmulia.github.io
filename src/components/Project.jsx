import { HiCode, HiLink } from "react-icons/hi"

const categoryColors = {
    web: "badge-blue",
    api: "badge",
    desktop: "badge-green",
    sql: "badge-green",
}

const Project = ({ image, name, desc, category, stacks, linkRepo, linkDeploy }) => {
    return (
        <div className="glass-card w-72 flex flex-col overflow-hidden group">
            <div className="relative overflow-hidden rounded-xl mb-3">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-3 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-white text-sm leading-tight">{name}</h3>
                    <span className={`badge ${categoryColors[category] || "badge"} shrink-0`}>{category}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed flex-1">{desc}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <div className="flex gap-1.5 flex-wrap">
                        {stacks}
                    </div>
                    <div className="flex gap-1.5">
                        {linkRepo}
                        {linkDeploy}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
