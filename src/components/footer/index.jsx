
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Logo from './../../assets/logo.png'
import { Image } from "@nextui-org/image"

const Footer = () => {
    return (
        <div className="footer-ctr shadow-after-bg relative py-14 px-10 text-white">
            <footer className="text-white z-10 relative">
                <div className="max-w-6xl mx-auto px-4  ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Company Info */}
                        <div className="mb-8 md:mb-0">
                            <a href="/" className="flex mb-4">
                                <Image src={Logo} alt="logo" className="h-24" />
                            </a>
                            <p className="text-sm text-gray-400">
                                Your company tagline or short description goes here.
                            </p>
                        </div>

                        {/* Quick as */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick as</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                                <li><a href="/services" className="hover:text-gray-300">Portal</a></li>
                                <li><a href="/products" className="hover:text-gray-300">Certificate</a></li>
                                <li><a href="/contact" className="hover:text-gray-300">Events</a></li>
                                <li><a href="/contact" className="hover:text-gray-300">Thaikalam</a></li>
                                <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <address className="not-italic text-sm">
                                <p>123 Main Street</p>
                                <p>City, State 12345</p>
                                <p>Country</p>
                                <p className="mt-2">Phone: (123) 456-7890</p>
                                <p>Email: info@yourcompany.com</p>
                            </address>
                        </div>

                        {/* Social Icons */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    <Facebook />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    <Twitter />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                    <Instagram />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                    <Linkedin />
                                    <span className="sr-only">LinkedIn</span>
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