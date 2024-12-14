/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function ButtonComponent({ children, className = '', variant }) {
    const baseClasses = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out"
    const variantClasses = variant === 'fill'
        ? "bg-red-500 text-white hover:bg-red-600"
        : "border border-red-500 text-white hover:bg-red-500 hover:text-white"


    return (
        <motion.button
            className={`${baseClasses} ${variantClasses} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="mr-2">{children}</span>
            <motion.span
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <ArrowRight size={16} />
            </motion.span>
        </motion.button>
    )
}

export default ButtonComponent