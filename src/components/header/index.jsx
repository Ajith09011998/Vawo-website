import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '../../assets/logo.png'
import { Image } from '@nextui-org/image'

const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: 'about' },
    { name: 'PORTAL', href: 'https://admin.lemuriavawo.org/' },
    { name: 'CERTIFICATE', href: 'certificate' },
    { name: 'EVENTS', href: 'events' },
    { name: 'THAIKALAM', href: '#' },
    { name: 'CONTACT US', href: '#' },
]


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-transparent">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Image src={Logo} alt="logo" className="h-24" />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.name}
                                className="relative"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                <motion.div
                                    href={item.href}
                                    className="py-4 px-5 text-white font-semibold hover:text-red-500 transition duration-300 cursor-pointer"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
                                    variants={{
                                        rest: { width: 0 },
                                        hover: { width: "100%" }
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button text-white" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            <motion.div
                className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#000000f0]">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-red-500 hover:bg-gray-50 transition duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </motion.div>
        </nav>
    )
}

export default Header