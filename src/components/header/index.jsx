/* eslint-disable no-unused-vars */
'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Image } from '@nextui-org/image'

const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Portal',
        url: 'https://admin.lemuriavawo.org/login',
    },
    {
        title: 'Classes',
        url: '#',
        submenu: [
            { title: 'Certificate', url: '/certificate' },
            { title: 'Classes', url: '/our-classes' }
        ],
    },
    // {
    //     title: 'Events',
    //     url: '#',
    //     submenu: [
    //         { title: 'Annocuments', url: '/annocuments' },
    //         { title: 'Events', url: '/events' },
    //         { title: 'Offers', url: '/offers' },
    //         { title: 'Gallery', url: '/gallery' },
    //         { title: 'Social Service', url: '/social-service' }
    //     ],
    // },
    {
        title: 'Events',
        url: '/events',
    },
    {
        title: 'Thaikalam',
        url: '/thaikalam',
    },
    {
        title: 'Shop',
        url: '/shop',
    },
    {
        title: 'Contact Us',
        url: '/contact-us',
    },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState(null)

    const toggleMenu = () => setIsOpen(!isOpen)
    const toggleSubmenu = (title) => {
        setActiveSubmenu(activeSubmenu === title ? null : title)
    }

    return (
        <nav className="bg-black text-white py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <Image src={Logo} alt="logo" className="h-24" />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <div key={item.title} className="relative group">
                                    <Link
                                        to={item.url}
                                        className="px-3 py-2 text-sm font-medium hover:text-red-500 hover:border-red-500 focus:outline-none"
                                        onClick={() => item.submenu && toggleSubmenu(item.title)}
                                    >
                                        {item.title}
                                        {item.submenu && (
                                            <ChevronDown className="inline-block ml-1 h-4 w-4" />
                                        )}
                                    </Link>
                                    {item.submenu && (
                                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                                            <div className="py-1" role="menu" aria-orientation="vertical">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.title}
                                                        to={subItem.url}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        role="menuitem"
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {menuItems.map((item) => (
                        <div key={item.title}>
                            <button
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 w-full text-left"
                                onClick={() => item.submenu && toggleSubmenu(item.title)}
                            >
                                {item.title}
                                {item.submenu && (
                                    <ChevronDown className="inline-block ml-1 h-4 w-4" />
                                )}
                            </button>
                            {item.submenu && activeSubmenu === item.title && (
                                <div className="pl-4 space-y-1">
                                    {item.submenu.map((subItem) => (
                                        <Link
                                            key={subItem.title}
                                            to={subItem.url}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                        >
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Header