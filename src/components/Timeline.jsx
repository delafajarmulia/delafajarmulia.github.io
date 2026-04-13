const Timeline = ({ major, school, description, time, icon, current }) => {
    return (
        <div className="relative pl-8 pb-10 last:pb-0">
            {/* Line */}
            <div className="absolute left-3 top-6 bottom-0 w-px bg-gradient-to-b from-violet-500/50 to-transparent last:hidden" />

            {/* Dot */}
            <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-sm border-2 ${
                current
                    ? "border-violet-400 bg-violet-500/20 shadow-lg shadow-violet-500/30"
                    : "border-slate-600 bg-slate-800/50"
            }`}>
                {icon || "🎓"}
            </div>

            <div className="glass-card p-4">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                        <h3 className="font-semibold text-white">{school}</h3>
                        <p className="text-sm text-violet-300 mt-0.5">{major}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-slate-400 whitespace-nowrap">{time}</span>
                        {current && (
                            <span className="badge text-xs">Active</span>
                        )}
                    </div>
                </div>
                {description && (
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{description}</p>
                )}
            </div>
        </div>
    )
}

export default Timeline
