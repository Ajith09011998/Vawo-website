/* eslint-disable react/prop-types */


export function Subsection({ title, children }) {
    return (
        <div className="mb-4 animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-2 text-amber-700 font-serif">{title}</h3>
            <div className="pl-4 border-l-2 border-amber-200">{children}</div>
        </div>
    )
}

