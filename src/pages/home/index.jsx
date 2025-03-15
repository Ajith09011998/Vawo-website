import { motion } from 'framer-motion';
import ButtonComponent from '../../components/ui/button';
import OurClassesSlider from '../../components/slider/our-classes-slider';
// import TestimonialSLider from '../../components/slider/testimonial-slider';
import AboutComponent from '../../components/about';
import ShopNow from './shonow';

const Home = () => {
    return (
        <div>
            {/* Home banner */}
            <div className="banner h-[500px] md:h-screen bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <p className='text-xs lg:text-xl text-red-600 italic font-bold uppercase'>Lemuria Varma Kalari Adimurai World Organization
                    </p>
                    <h1 className='text-xl md:text-6xl font-bold italic uppercase'>
                        Martial Arts School
                    </h1>
                    <div className='banner-content'>
                        <p className='relative text-sm lg:text-xl uppercase'>
                            Adimurai World Organization
                        </p>
                    </div>

                    <div>
                        <div className="flex space-x-4 items-center justify-center">
                            <ButtonComponent variant="fill" className='bg-red-700 rounded-full'>
                                Donate Now
                            </ButtonComponent>
                            <ButtonComponent variant="outline" className='border-red-700 rounded-full text-white'>
                                Traing Classes
                            </ButtonComponent>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* Home address */}
            <div className='bg-[#13182a] text-white border-b border-gray-600'>
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-around gap-5'>
                    <div className='text-center uppercase'>
                        <p className='text-sm text-red-500 font-medium'>Call us 24/7</p>
                        <p>+91 99447 76601</p>
                    </div>
                    <div className='text-center uppercase'>
                        <p className='text-sm text-red-500 font-medium'>305,GANAPATHI NAGAR, 2ND STREET, CHETTIKULAM </p>
                        <p>NAGERCOIL, Tamil Nadu, India - 629001.</p>
                    </div>
                    <div className='text-center uppercase'>
                        <p className='text-sm text-red-500 font-medium'>Working Hours</p>
                        <p>daily: 9am - 8pm</p>
                    </div>
                </motion.div>
            </div>
            {/* Home About us */}
            <AboutComponent />
            {/* Home Our classes */}
            <OurClassesSlider />
            {/* our client says */}
            {/* <TestimonialSLider /> */}
            {/* Our master slider */}
            {/* shop now */}
            <div className='pt-20'>
                <ShopNow />
            </div>
            {/* our events */}
            <div className='bg-white text-black px-4 py-20'>
                <div className='max-w-6xl mx-auto flex flex-col gap-5 items-center  text-center'>
                    <p className='text-2xl uppercase font-medium'>DONATE <span className='text-red-500'> Now</span></p>
                    <div>
                        <hr className='header-line' />
                    </div>

                    <p>Your support can change lives. Every contribution, no matter the size, helps us bring hope and <br />
                        resources to those in need. Together, we can make an impact.
                    </p>
                    <ButtonComponent variant="fill" className='bg-red-700 rounded-full'>
                        Donate Now
                    </ButtonComponent>
                </div>
            </div>
        </div >
    )
}

export default Home