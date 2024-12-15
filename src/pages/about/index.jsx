import { Image } from '@nextui-org/image';
import { motion } from 'framer-motion';
import OurClassesSlider from '../../components/slider/our-classes-slider';
import ButtonComponent from '../../components/ui/button';

const About = () => {
    return (
        <div>
            {/* about banner */}
            <div className="banner h-96 bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-6xl font-bold italic'>
                        About Us
                    </h1>
                </motion.div>
            </div>
            {/* about */}
            <div className='max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-center z-[9] relative'>
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex flex-col gap-5 text-black'>
                    <div>
                        <p className='text-3xl uppercase font-medium'>About <span className='text-red-500'>Fight</span> school</p>
                        <div>
                            <hr className='header-line' />
                        </div>
                    </div>

                    <p>
                        Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
                    </p>
                    <p>
                        We teach martial arts because we love it — not because we want to make money
                        on you. Unlike other martial arts schools, we do not require you to sign long
                        We teach martial arts because we love it — not because we want to make money
                        on you. Unlike other martial arts schools, we do not require you to sign long
                        term contracts. You just pay one low monthly fee for your martial arts and
                        self defense classes at the beginning of each month. Many martial arts.
                    </p>
                    <div>
                        <p>Aiden Richards</p>
                        <p className='text-red-500 font-medium text-xs'>Director / Instructor</p>
                    </div>
                </motion.div>
                <div>
                    <Image src="https://html.kodesolution.com/2018/martialarts-html/demo/images/about/3.png" />
                </div>
            </div>
            {/* Home Our classes */}
            <OurClassesSlider />
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
        </div>
    )
}

export default About