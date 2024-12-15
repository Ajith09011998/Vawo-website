import { motion } from 'framer-motion';
import ButtonComponent from '../../components/ui/button';
import OurClassesSlider from '../../components/slider/our-classes-slider';
import TestimonialSLider from '../../components/slider/testimonial-slider';
import OurMasterSlider from '../../components/slider/our-master-slider';
import AboutComponent from '../../components/about';

const Home = () => {
    return (
        <div>
            {/* Home banner */}
            <div className="banner h-screen bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <p className='text-xs lg:text-xl text-red-600 italic font-bold'>#1 MIXED MARTIAL ARTS SCHOOL IN MIAMI</p>
                    <h1 className='text-xl md:text-6xl font-bold italic'>
                        BE A WORRIOR IN LIFE
                    </h1>
                    <h3 className='rounded-none lg:text-2xl font-bold italic'>MIND.BODY & SPIRIT IMPROVED</h3>

                    <div className='banner-content'>
                        <p className='relative text-sm lg:text-xl'>
                            KUNG FU SCHOOL IN CHINA
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
                        <p>+91 8989875678</p>
                    </div>
                    <div className='text-center uppercase'>
                        <p className='text-sm text-red-500 font-medium'>Season Street 45/2</p>
                        <p>Los angeles, Inc - 4502</p>
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
            <TestimonialSLider />
            {/* Our master slider */}
            <OurMasterSlider />
            {/* our events */}
            <div className='bg-[#13182a] text-white px-4 py-20'>
                <div className='max-w-6xl mx-auto flex flex-col gap-5 items-center  text-center'>
                    <p className='text-2xl uppercase font-medium'>DONATE <span className='text-red-500'> Now</span></p>
                    <div>
                        <hr className='header-line' />
                    </div>
                    <p>Pig tongue chicken pork loin, porchetta drumstick frankfurter burgdoggen ham <br />
                        jowl pork belly meatball t-bone beef ribs spare ribs.
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