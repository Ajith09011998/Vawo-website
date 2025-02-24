/* eslint-disable react/prop-types */

export function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-amber-50 text-stone-800">
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        </div>
    )
}

