
import { Facebook, Instagram, Youtube } from "lucide-react"
import Logo from './../../assets/logo.png'
import { Image } from "@nextui-org/image"

const Footer = () => {
    return (
        <div className="bg-black relative py-14 px-4 lg:px-10 text-white z-[9]">
            <footer className="text-white z-10 relative">
                <div className="max-w-6xl mx-auto px-4  ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Company Info */}
                        <div className="mb-8 md:mb-0">
                            <a href="/" className="flex mb-4">
                                <Image src={Logo} alt="logo" className="h-24" />
                            </a>
                            <p className="text-sm text-gray-400">
                                Lemuria Varmakalari Adimurai World Organization, is an unlisted private company incorporated on 14 September, 2021.
                            </p>
                        </div>

                        {/* Quick as */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick as</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                                <li><a href="https://admin.lemuriavawo.org/" className="hover:text-gray-300">Portal</a></li>
                                <li><a href="/certificate" className="hover:text-gray-300">Certificate</a></li>
                                <li><a href="#" className="hover:text-gray-300">Events</a></li>
                                <li><a href="thaikalam" className="hover:text-gray-300">Thaikalam</a></li>
                                <li><a href="/contact-us" className="hover:text-gray-300">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <address className="not-italic text-sm">
                                <p>305,GANAPATHI NAGAR, 2ND STREET, CHETTIKULAM</p>
                                <p>NAGERCOIL, Tamil Nadu, India - 629001.</p>
                                <p className="my-2">Phone: +91 99447 76601</p>
                                <p>Email: lemuriamas@gmail.com</p>
                            </address>
                        </div>

                        {/* Social Icons */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/share/18SvpJnK7D/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    <Facebook />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="https://www.instagram.com/lemuriamartialarts/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                    <Instagram />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="https://www.youtube.com/c/Lemuriamartialarts" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                                    <Youtube />
                                    <span className="sr-only">Youtube</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer