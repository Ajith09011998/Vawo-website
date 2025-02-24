/* eslint-disable react/prop-types */

export function Section({ title, children, className = '', icon }) {
    return (
        <div className={`w-full bg-white border-2 border-stone-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl ${className}`}>
            <div className="bg-stone-100 p-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                    {icon}
                </div>
                <h2 className="text-xl font-semibold font-serif">{title}</h2>
            </div>
            <div className="p-6">{children}</div>
        </div>
    )
}

